---
layout: post
title: Separating Authentication and Identity with OmniAuth
---

_Note: This is a guest post by one of our event sponsors,
<a href="http://intridea.com">Intridea</a>_

Your Rails Rumble app could live and die by its authentication scheme. Judges and voters are only going to spend a precious few minutes with your app, and you have to make every second count. Judges don't want to create unique logins for every app they review, and you wouldn't either. But you don't need the headache of stringing together multiple libraries to support multiple authentication providers, not to mention the pain if your app is a mashup of multiple services.

[OmniAuth](http://github.com/intridea/omniauth) is a recently released library from Intridea that gives you drop-in Rack middleware to authenticate with just about anything. In this guest post we're going to walk you through how to use OmniAuth and Rails 3 to allow multiple-provider authentication in your app.

### Enter OmniAuth

The first step is to add OmniAuth to your Gemfile:

    gem 'omniauth'

Now we need to create an initializer to make use of the OmniAuth middleware. Easy enough, in `config/intitializers/omniauth.rb` add:

    Rails.application.config.middleware.use OmniAuth::Builder do
      provider :twitter, 'CONSUMER_KEY', 'CONSUMER_SECRET'
      provider :facebook, 'APP_ID', 'APP_SECRET'
      provider :linked_in, 'CONSUMER_KEY', 'CONSUMER_SECRET'
    end

You've actually already done quite a lot. Try running your application with `rails server` and navigating to `/auth/twitter`, `/auth/facebook`, or `/auth/linkedin`. You should (assuming you've set up applications with the respective providers correctly) be redirected to the appropriate site and asked to login.

### Handling the Callback

Upon confirmation, you should be redirected back and get a routing error from Rails from `/auth/yourprovider/callback`. So let's add a route!  In `config/routes.rb` add:

    match '/auth/:provider/callback', :to => 'sessions#create'

But of course, this points to a non-existent controller, so let's create that as well:

    rails g controller sessions

Now in our `sessions_controller.rb` lets add a bit of code:

    class SessionsController < ApplicationController
      def create
        render :text => request.env['rack.auth'].inspect
      end
    end

If you start up the app again and go through the auth process, you should now see a hash that includes a whole lot of information about the user instead of a routing error. We're on our way!

### Authorizations and Users

One of the nice things about OmniAuth is that it doesn't assume how you want to handle the authentication information, it just goes through the hard parts for you. We want users to be able to log in using one or many external services, so we're actually going to separate users from authorizations. Let's create simple Authorization and User models now.

    rails g model authorization provider:string uid:string user_id:integer
    rails g model user name:string

This creates the models we need with appropriate migrations. Notice that the User model doesn't need to contain any information about authentication providers because we'll model that through a relationship to the Authorization model. Set up your models like so:

    class User < ActiveRecord::Base
      has_many :authorizations
    end

    class Authorization < ActiveRecord::Base
      belongs_to :user
      validates_presence_of :user_id, :uid, :provider
      validates_uniqueness_of :uid, :scope => :provider
    end

Here we're modeling very simple relationships and making sure that the Authorization has both a provider (e.g. "twitter" or "facebook") and a uid (i.e. the external service ID). Next up, we'll wire these models into our controller to create a real sign in process.

### Signing Up/In

One of the nice things about external authentication is you can collapse the sign up and sign in process into a single step. What we'll do here is:

1. When a user signs in, look for existing Authorizations for that external account.
2. Create a user if no authorization is found.
3. Add an authorization to an existing user if the user is already logged in.

Let's work backwards for this functionality by adding the code we want to have to the controller. Modify the `create` action in `SessionsController` to look like this:

    def create
      auth = request.env['rack.auth']
      unless @auth = Authorization.find_from_hash(auth)
        # Create a new user or add an auth to existing user, depending on
        # whether there is already a user signed in.
        @auth = Authorization.create_from_hash(auth, current_user)
      end
      # Log the authorizing user in.
      self.current_user = @auth.user

      render :text => "Welcome, #{current_user.name}."
    end

Now let's implement some of these methods. First up, adding some class methods to Authorization:

    # in authorization.rb

    def self.find_from_hash(hash)
      find_by_provider_and_uid(hash['provider'], hash['uid'])
    end

    def self.create_from_hash(hash, user = nil)
      user ||= User.create_from_hash!(hash)
      Authorization.create(:user => user, :uid => hash['uid'], :provider => hash['provider'])
    end

Now we need to add the method referenced above to the User class:

    # in user.rb

    def self.create_from_hash!(hash)
      create(:name => hash['user_info']['name'])
    end

Finally, we need to add some helpers to `ApplicationController` to handle user state:

    class ApplicationController < ActionController::Base
      protected

      def current_user
        @current_user ||= User.find_by_id(session[:user_id])
      end

      def signed_in?
        !!current_user
      end

      helper_method :current_user, :signed_in?

      def current_user=(user)
        @current_user = user
        session[:user_id] = user.id
      end
    end

Voila! Now a user can sign in using any of their accounts and a User will automatically be fetched or created. This is merely a small jumping off point, but from here it would be trivial to do any of the following:

* Show the user a list of services that they're connected to and let them connect to additional ones (creating Authorizations) or delete existing connections.
* Provide a sign out (just delete the `:user_id` from the session.)
* Connect to APIs of the authenticating services (add `token` and `secret` to Authorization, and store them from the `auth` key of the `rack.auth` hash).

We hope that you'll consider dropping OmniAuth into your Rails Rumble application (it also works [really easily with Sinatra](http://github.com/intridea/omniauth/wiki/Sinatra-Example)) and this post has given you a good foundation for fast and easy multi-provider authentication in Rails 3 with OmniAuth.
