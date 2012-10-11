---
layout: post
title: Linode - Up & Running With StackScripts
---

[Linode](http://linode.com), our wonderful infrastructure sponsor that'll be providing every team with a server during this year's Rails Rumble, has a great feature called **StackScripts**. Simply said, StackScripts let you get a server up and running faster than fast. A StackScript can be as little as installing Ruby, or something much more involved that sets up and configures everything you need to run an app.

This year, we're happy to announce three optional StackScripts for Rails Rumble competitors.

## The Full Stack

The Full Stack is a deployment ready script for Rails 3.2 apps that sets up Ruby 1.9.3, RubyGems, Rails, MySQL, Apache, Passenger, Git, Memcached, and more. It even comes with a corresponding capistrano deployment recipe, official Rails Rumble verification keys already installed, and pre-configured deploy keys ready for your team's GitHub repository. Unless you're allergic to MySQL, you've found your winning StackScript! ([View Instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts))

## The Short Stack

Prefer Nginx? Not using Rails? Well the Short Stack may be just the thing for you! With this script, you'll get Ruby 1.9.3, RubyGems, MySQL, Git, Memcached, and a bit of Rails Rumble configuration (verification keys & pre-generated deploy keys). ([View Instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts))

## The Mini Stack

A little Ruby 1.9.3 & RubyGems, Git, Memcached, and a dash of official Rails Rumble configuration (verification keys & pre-generated deploy keys). This StackScript will lay down a nice foundation, but rest is up to you! Install your favorite data store and web server and you're off! ([View Instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts))

## Going Stack-less

The above StackScripts are totally optional. You're welcome to pick from any of Linode's available distributions, roll up your sleeves and configure your server on your own. The only thing we ask is that you remember to add our public key so the Rails Rumble verification system can do its thing. You can do this by sshing into your server and running the following command:

    mkdir -p ~/.ssh && curl http://railsrumble.com.s3.amazonaws.com/rumblebot.pub >> ~/.ssh/authorized_keys && chmod 0644 ~/.ssh/authorized_keys

## Linode Access & Configuration

Roughly 12 hours or so before the competition starts, we'll make your Linode access details available in your team's dashboard (sign into [railsrumble.com](http://railsrumble.com), click your account button on the top left, then click "Team Dashboard"). We'll also email you to let you know those are available. Prior to the competition, you're welcome to sign into Linode with the credentials we provide and configure your server using their management interface. However, you won't be able to boot your server until the competition starts on October 13th at 00:00 UTC. To configure your Linode with one of our pre-made StackScripts above, [check out these instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts).

## GitHub Access & Deploy Keys

[GitHub](http://github.com), our other awesome infrastructure sponsor, has a great feature called **Organizations**. Organizations is how we'll be providing your team access to its private Rails Rumble repository. Shortly before the competition begins, you'll have access to our Organization on GitHub's site and your team's repository will appear there &mdash; [like magic](https://www.youtube.com/watch?v=lbg6DJ7zFIM)! When the time comes, just sign into GitHub and click the [account switching menu on the top left](http://cl.ly/image/1L3s0O0X3t2A), then click into your team's repository to get started.

There are a few rules regarding your GitHub repository:

* Don't push to your repository before the competition starts.
* Don't rename your repository.
* Don't remove our post-commit hook.

All three of the StackScripts above will pre-generate a deploy key in /root/.ssh and configure your /root/.ssh/config to use that deploy key for github.com. You should add the public key at /root/.ssh/github-deploy-key.pub to your GitHub repository's Admin / Deploy Keys area once you get access to your GitHub repository.

## It's Almost Time!

We've very close to the start of the 2012 Rails Rumble and know how excited everyone is to get going. And while we hope that your team's planning is already complete and that you'll be spending the next 30 hours centering your chi, we suspect you'll be drinking way too much coffee and sketching endlessly on your whiteboards. It's normal, don't worry!

So, keep your eyes open for our email and remember to make sure your teammates have accepted your invitations before the competition starts. Good luck!

\- [@tsmango](https://twitter.com/tsmango)