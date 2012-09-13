---
layout: post
title: Speed Up Your Rumble Deployment with Linode StackScripts
---

_Note: This is a guest post by one of our event sponsors,
<a href="http://linode.com">Linode</a>_

<img src="/images/2010/10/pancake-stack.png" style="float: right; margin: 0 0 10px
0;"/>

Linode is proud to be sponsoring the Rails Rumble for the fourth consecutive
year.  We'd like to highlight a new Linode feature available to teams this
year that we call <a href="http://linode.com/stackscripts/">StackScripts</a>, which can speed up your deployment process significantly. We're sure that teams who utilize a StackScript for their Linode will have a distinct competitive advantage.

StackScripts provide a way to create automated custom deployments. Here's the breakdown:

* StackScripts seed a base Linode distribution with an additional script to run at first boot. You don't need to maintain a cumbersome custom image or template when you can deploy instances that automatically create themselves according to your instructions; once your Linode is booted for the first time, the StackScript does the rest.
* A StackScript can install Ruby and bootstrap a stack, potentially installing any needed Gems or even handing off control to Capistrano. Anything is possible.
* There is a <a href="http://linode.com/stackscripts/">library</a> of pre-built StackScripts that are created by the Linode user community. You can take advantage of these scripts as a starting point for new deployments.
* StackScripts can be deployed on top of any of the 14 distributions Linode offers in either 32-bit or 64-bit flavors.

As a developer, if you've made it this far in the blog post, we're sure there are dozens of ideas popping up in your head. Get to work, and save those precious few minutes when the Rumble begins. Good luck!

_UPDATE: Members of the <a href="http://twitter.com/madrailers">Madison Ruby
User Group</a> have put together a
<a href="http://github.com/madrailers/rumble_stack_script">swanky base
StackScript especially for Rails Rumble projects</a>. Check it out on GitHub
and fork away!_
