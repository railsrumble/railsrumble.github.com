---
layout: post
title: "2015 Rails Rumble Gem Teardown"
---

*In keeping with our tradition of Rails Rumble Gem Teardown posts, we'd like to **thank the Red Miners team** for putting together this fantastic post. Don't forget to check out their entry, [Gemsavvy](http://gemsavvy.tips/), which placed 8th overall!*

---

Welcome to the Gem Teardown for the 2015 Rails Rumble. For background, the [Rails Rumble](http://railsrumble.com/) is a competition where teams have 48 hours to build a Rails app from scratch. Teams compete for fame and sweet prizes provided by the Rails Rumble [sponsors](http://blog.railsrumble.com/2015/10/23/prizes-have-landed/). The contest wrapped up and the [winners](http://blog.railsrumble.com/2015/11/16/winners-announced/) have been announced. Congratulations to everyone who participated!

The Rails Rumble organizers - especially [Tom Mango](https://twitter.com/tsmango) - were kind enough to collect Gemfiles from the teams and provide them to us for some analysis. They did a similar writeup last year except that this year, the first analysis was made by the Rails app we made during the Rails Rumble!

First, let's introduce you to the [Gemsavvy](http://gemsavvy.tips/) project.

## Gemsavvy

Basically, you create a community - let's say Rails Rumble - then start a survey - let's say 2015 Gem Teardown - and ask your fellow members to upload their Gemfile. Gemsavvy will analyse all gems used by your community and propose graphs based on gems usage among different categories (ie Background Jobs, Search Engines, etc.). Plus, it will show you the Outsiders, these gems that are quite popular on Github but only used by few people from your community.

The purpose of this analysis is to discover trendy gems and create exchanges among members of a community. These exchanges could even lead to lightning talks in local Ruby User Groups.

### Red Miners

As you may have guessed, your humble authors for this writeup are the members of Red Miners competitor team: [Anthony Laibe](https://github.com/alaibe) working for [Smart Pension](https://www.autoenrolment.co.uk/), [Kevin Disneur](https://kevin.disneur.me/), [Michael Fatoki-Bello](http://www.lovekaizen.com/) working for [Arena Flowers](https://www.arenaflowers.com/) and [Cecile Veneziani](http://cecilitse.org/) freelancer and Rails teacher.

In 48 hours, we pushed **264 commits**, merged **102 pull requests**, closed **62 issues** on Trello and last but not least, there were only **4 hours** without anyone committing on the repository.

## Gem Analysis

We analyzed 128 Gemfiles. Read on to learn how the Rails Rumble teams were able to create such amazing apps over one weekend.

## Web frameworks / Database adapters / Web servers

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/web_app_frameworks.png"/>
</div>

What a first surprise! Someone built a project with [cuba](https://github.com/soveran/cuba), a micro framework.
Concerning [Sinatra](http://github.com/sinatra/sinatra) and its 10.4% of usage, some - like us - might have just installed it in order to have a web interface to sidkeiq.
But obviously the most popular web framework is still [Ruby on Rails](https://github.com/railsware/js-routes) with 88.1% of usage.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/sql_database_adapters.png"/>
</div>

Rails Rumble used [Heroku](http://heroku.com/) for deployment this year again. So most teams used PostgreSQL (80.9%), the Heroku default. Note that 5 teams made the choice to use MySQL. We're quite surprised to note that 22 teams have sqlite in their Gemfiles. We can only suppose that some might have forgotten to remove it or that some really used it.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/web_servers.png"/>
</div>

It's really interesting to have a look at charts like web servers because all of these projects are quite old and well used.
Here again we can see that the defacto [puma](https://github.com/puma/puma) proposed by Heroku is widely used.
Now, the interesting part is the distribution usage between [passenger](https://github.com/FooBarWidget/passenger), [thin](http://code.macournoyer.com/thin/) and [unicorn](http://unicorn.bogomips.org/). We can clearly guess which one is the oldest.

## Authentication / Authorization

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_authentication.png"/>
</div>

Ok there's no discussion here. [Devise](http://github.com/plataformatec/devise) with its 65.2% is the most used authentication gem.
But we must say that we were quite surprised to discover that some teams used other gems such as [clearance](https://github.com/thoughtbot/clearance), [sorcery](http://github.com/NoamB/sorcery) and even [authlogic](http://github.com/binarylogic/authlogic).

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_authorization.png"/>
</div>

Looks like in the authorization world no one clearly stood out after the retirement of cancan even if here [Pundit](https://github.com/elabs/pundit) seems to be the most used one.

## Template engines / Form builders

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/template_engines.png"/>
</div>

Only 16% of the teams did use a different template engine than the standard ERB.
52.4% are (still) using [haml](http://github.com/haml/haml) compared to 33.3% using (the awesome) [slim](http://github.com/slim-template/slim).
Note that few used [tilt](http://github.com/rtomayko/tilt) and [markerb](http://github.com/plataformatec/markerb).

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/form_builders.png"/>
</div>

It seems that a lot of people are (still) using the standard form helpers provided by Ruby on Rails. For the other ones, [simple_form](https://github.com/plataformatec/simple_form) is widely used. It can be used in combination with [cocoon](https://github.com/nathanvda/cocoon) to easily handle dynamic nested forms.

## File upload / Pagination / Search

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_file_upload.png"/>
</div>

Only 14% of the teams needed file upload. [Paperclip](https://github.com/thoughtbot/paperclip) and then [carrierwave](https://github.com/carrierwaveuploader/carrierwave/) are the most used ones. Shout out to the new comers [dragonfly](http://github.com/markevans/dragonfly) and [refile](https://github.com/refile/refile).

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/pagination.png"/>
</div>

[Kaminari](https://github.com/amatsuda/kaminari) with 73.3% of usage is the defacto pagination gem since few years.
It's interesting to see that [will_paginate](https://github.com/mislav/will_paginate) is still used by some projects.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_search.png"/>
</div>

New entry in the gem teardown, the searching category. 4% of projects did use a search engine.
We can say that the Rails community adopted [elasticsearch](https://www.elastic.co/products/elasticsearch).

## Background jobs / Scheduling

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/background_jobs.png"/>
</div>

24% of projects used background jobs. [sidekiq](https://github.com/mperham/sidekiq/) is clearly the most used one.
It's interesting to see that here [delayed jobs](http://github.com/collectiveidea/delayed_job_active_record) is more used than [resque](http://github.com/resque/resque).

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/scheduling.png"/>
</div>

Only 4% projects needed scheduling. Among them 60% used [whenever](http://github.com/javan/whenever). The last 40% was shared by [resque-scheduler](https://github.com/resque/resque-scheduler) and [rufus-scheduler](http://github.com/jmettraux/rufus-scheduler).

## CSS / Assets

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/css_with_ruby.png"/>
</div>

Note that Materialize was not tagged but we've done the math for you.
Here are the stats: 32% for bootstrap, 10% for bourbon and also 10% for materialize.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_assets.png"/>
</div>

And no less than 31 gems from Rails Assets!

## Configuration management / State machines

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/configuration_management.png"/>
</div>

We can notice that [dotenv](https://github.com/bkeepers/dotenv) is widely more used than [figaro](https://github.com/laserlemon/figaro).
On the other hand, it's quite surprising to see that [settingslogic](http://github.com/binarylogic/settingslogic) is still used while it hasn't been updated for 3 years.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/state_machines.png"/>
</div>

Only 3% of projects used state machines. It looks like that the community hasn't chosen yet its state machine between [aasm](https://github.com/aasm/aasm) and [state_machine](http://github.com/pluginaweek/state_machine).

## Admin interfaces / Exception notification

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/rails_admin_interfaces.png"/>
</div>

Another category that is surprising. Only 7% of projects did install an administration interface while it's a convenient way to have an overview of what's happening on the app during the Rails Rumble judging week.
While [rails_admin](https://github.com/sferik/rails_admin) is an easy option (everything working out of the box), at Red Miners, we prefer the configuration required by [activeadmin](http://github.com/activeadmin/activeadmin). Thus we took time to tweak it during the hackathon.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/exception_notification.png"/>
</div>

Only 14% of projects configured an exception notification system. 3 trackers where used: 1 open source simple mailing gem named [exception_notification](https://github.com/smartinez87/exception_notification) and 2 free-tier services. Among them [rollbar](https://github.com/rollbar/rollbar-gem) was clearly the most used but also the least beautiful. That said, compared to [airbrake](https://github.com/airbrake/airbrake), rollbar offers a wider retention period.

## Geocoding & Maps / Graphing

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/geocoding_maps.png"/>
</div>

7% of projects used maps or geocoding and one of them used the [PostGIS](http://github.com/rgeo/activerecord-postgis-adapter) adapter.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/graphing.png"/>
</div>

3% integrated graphs with a preference to [chartkick](http://chartkick.com/).

## API / HTTP Clients

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/api_clients.png"/>
</div>

What an unexpected stat! More than 7 different APIs where used!
The most used ones where GitHub and Facebook.
But there were also Amazon Product Advertising, Bitly, Ebay, Linkedin and Twitter.

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/http_clients.png"/>
</div>

This section is quite interesting. It looks like we have more than 5 HTTP client gems.
[httparty](http://github.com/jnunemaker/httparty) and [rest-client](https://github.com/rest-client/rest-client) appear to be the most famous.
Note that [mechanize](https://github.com/sparklemotion/mechanize) allows you to follow redirections, links plus fill and submit forms.

## Code metrics / Tests

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/code_metrics.png"/>
</div>

Even during a stressing event such as a hackathon, some took time to pay attention to quality and installed [simplecov](https://github.com/colszowka/simplecov/), [rubocop](http://github.com/bbatsov/rubocop) and [coveralls](https://coveralls.io/).

<div class="image image-bordered">
  <img src="http://misc.railsrumble.com.s3.amazonaws.com/assets/images/2016/01/unit_test_frameworks.png"/>
</div>

Again that's really surprising to discover that 5% of projects do have a unit testing framework in their Gemfile even though it doesn't permit us to know if these framework were really used.

Here there is no clear preference on whether [rspec](http://github.com/rspec/rspec) or [minitest](https://github.com/seattlerb/minitest).

### Outsiders

As we mentioned above, Gemsavvy is not only a per category analyzer. It also extracts interesting gems. We've extracted some here:

* [chewy](https://github.com/toptal/chewy) - High-level Elasticsearch Ruby framework based on the official elasticsearch-ruby client.
* [email_spec](http://github.com/bmabey/email-spec/) - Collection of RSpec/MiniTest matchers and Cucumber steps for testing email in a ruby app using ActionMailer or Pony.
* [jazz_hands](https://github.com/nixme/jazz_hands) - Pry-based enhancements for the default Rails 3 and 4 consoles.
* [mutant-rspec](https://github.com/mbj/mutant) - Mutation testing for Ruby.
* [seedbank](https://github.com/james2m/seedbank) - Gives your Rails seed data a little structure.

## Red Miners' Choice

Finally, we'd like to use our editor's pen to highlight some of the awesome gems that were used for the contest. Definitely check them out:

* [config](https://github.com/railsconfig/config) - Easiest way to add multi-environment yaml settings to Rails, Sinatra, Pandrino and other ruby projects.
* [enumerize](https://github.com/brainspec/enumerize) - Enumerated attributes with I18n and ActiveRecord/Mongoid support.
* [foreman](https://github.com/ddollar/foreman) - Manage Procfile-based applications.
* [high_voltage](https://github.com/thoughtbot/high_voltage) - Easily include static pages in your Rails app.
* [materialize-sass](https://github.com/mkhairi/materialize-sass) - Materialize Sass version for Rails Asset Pipeline.
* [mechanize](https://github.com/sparklemotion/mechanize) - Mechanize is a ruby library that makes automated web interaction easy.
* [reform](https://github.com/apotonick/reform/) - Form objects decoupled from models.
* [slim](https://github.com/slim-template/slim) - The templating language.

Hope you've discovered fun facts about rumblers and discovered new gems. Spread the word in your Ruby groups and find more gems and categories [on the survey](http://gemsavvy.tips/groups/rails-rumble/surveys/46171f80e4fffc)!
