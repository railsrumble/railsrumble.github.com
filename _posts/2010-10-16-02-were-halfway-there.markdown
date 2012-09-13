---
layout: post
title: Ohhhhhhh, we're halfway there...!
---

Esteemed Rumblers, we're coming up on the half-way mark. We're really excited to see all the cool projects you guys have been working on. We've been keeping busy ourselves, getting ready for some really awesome expert judging - set to take place immediately after you all put your pencils down!

Also, thanks to the wonderful folks at <a href="http://pusherapp.com">Pusher</a>, we've got a shiny new <a href="http://dashboard.railsrumble.com">Rumble Dashboard</a> that shows off all the crazy commits, tweets, and messages you guys have been sending out as you've been working. A huge thanks to our friends at Pusher for their hard work!

## Why not deploy now?

Remember, early feedback is good feedback. That's why we're encouraging everyone to take a few minutes to test out their deployment. Tweet up your successes, shout out to the IRC chat and show us how cool your projects already are - but most importantly, continue developing with the confidence that you won't end up in a time-crunch trying to deploy those last-minute changes when we get down to the wire.

So give it a shot, deploy now. Let's see those placeholder pages, and be proud!

## When You're Done

We need you to do a few things before the competition ends to be considered for judging.

First, we need you to push a git tag to GitHub to mark the deployed version of your app. To push the tag, go ahead and run:

    git tag -a rumble10 -m 'Tagging final release'
    git push --tags

Secondly, make sure you add all the information for your VPS and your application into your team's profile page. Specifically, we need to know the username for your VPS, and the path to the root of your application.

Thirdly, you need to add our SSH public key for the user you have specified. You can run this on your server under that user:

    ruby -r open-uri -e
      'eval(open("http://r10.railsrumble.com/rumble-ssh-setup.txt").read)'

Once you have done all of this, you can submit your team for verification. This will do a series of checks to ensure all the information we need to login to your vps / verify your entry is correct.

You can request verification at any point during and after the competition.

Best of luck for the remaining hours!

&mdash; The Organizers
