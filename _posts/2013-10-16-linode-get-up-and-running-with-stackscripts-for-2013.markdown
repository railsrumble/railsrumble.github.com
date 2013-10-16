---
layout: post
title: "Linode - Get Up & Running With StackScripts for 2013"
---

[Linode](http://linode.com), our wonderful infrastructure sponsor that'll be providing every team with a server during this year's Rails Rumble, has a great feature called **StackScripts**. Simply said, StackScripts let you get a server up and running faster than fast. A StackScript can be as little as installing Ruby, or something much more involved that sets up and configures everything you need to run an app.

This year, we're happy to announce that we've worked closely with Linode to produce a single, flexible StackScript that Rails Rumble competitors may optionally use for the competition.

## The "2013 Rails Rumble - Official" StackScript

For the full instructions on how to use this StackScript, [please check the wiki](https://github.com/railsrumble/community/wiki/Linode-StackScripts).

This StackScript will install and configure a number of basic standard packages, as well as Ruby 2, MySQL (Optional), Apache + Passenger (Optional), Git, and Memcached. It will also configure SSH deploy keys (that should be added to your GitHub repository's deploy keys area), a deployment location, and a database.yml, for your Rails app.

When MySQL, Apache, and Passenger are optionally installed, this StackScript can be used in conjunction with a specific Capistrano deployment recipe, which we've provided in the complete instructions.

However, you may choose to not install MySQL, Apache, and Passenger, in which case all of the base packages and Ruby will still be installed and the various SSH keys necessary for deployments and the Rails Rumble verification system will be properly setup.

Either way, check out the [complete instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts) and decide if this is the StackScript for you!

## Going Stack-less

The above StackScript is totally optional. You're welcome to pick from any of Linode's available distributions, roll up your sleeves and configure your server on your own. You can even use the 2012 StackScripts we released or a StackScript released by others, [like this one by CookiesHQ](http://cookieshq.co.uk/posts/linode-rails-ready-stack-script-capistrano-database-deployment-setup/). The only thing we ask is that you remember to add our public key so the Rails Rumble verification system can do its thing. You can do this by sshing into your server and running the following command as root:

    mkdir -p ~/.ssh && curl http://railsrumble.com.s3.amazonaws.com/rumblebot.pub >> ~/.ssh/authorized_keys && chmod 0644 ~/.ssh/authorized_keys

## Linode Access & Configuration

Roughly 6 to 12 hours or so before the competition starts, we'll make your Linode access details available in your team's dashboard (sign into [railsrumble.com](http://railsrumble.com), click your account button on the top left, then click "Team Dashboard"). We'll also email you to let you know those are available. Prior to the competition, you're welcome to sign into Linode with the credentials we provide and configure your server using their management interface. However, you won't be able to boot your server until the competition starts on October 19th at 00:00 UTC. To configure your Linode with one of our pre-made StackScripts above, [check out these instructions](https://github.com/railsrumble/community/wiki/Linode-StackScripts).

## GitHub Access & Deploy Keys

[GitHub](http://github.com), our other awesome infrastructure sponsor, has a great feature called **Organizations**. Organizations is how we'll be providing your team access to its private Rails Rumble repository. When the competition begins, you'll have access to our Organization on GitHub's site and your team's repository will appear there &mdash; [like magic](https://www.youtube.com/watch?v=I04GL6IUFhY)! When the time comes, just sign into GitHub and click the [account switching menu on the top left](http://cl.ly/image/1L3s0O0X3t2A), then click into your team's repository to get started.

There are a few rules regarding your GitHub repository:

* Don't push to your repository before the competition starts.
* Don't rename your repository.
* Don't remove our post-commit hook.

The StackScripts above will pre-generate a deploy key in /root/.ssh and configure your /root/.ssh/config to use that deploy key for github.com. You should add the public key at /root/.ssh/github-deploy-key.pub to your GitHub repository's Settings / Deploy Keys area once you get access to your GitHub repository.

## It's Almost Time!

We've very close to the start of the 2013 Rails Rumble and know how excited everyone is to get going. And while we hope that your team's planning is already complete and that you'll be spending the next 60 hours centering your chi, we suspect you'll be drinking way too much coffee and sketching endlessly on your whiteboards. It's normal, don't worry!

So, keep your eyes open for our emails and remember to make sure your teammates have accepted your invitations **before** the competition starts. Good luck!

\- [@tsmango](https://twitter.com/tsmango)