---
layout: post
title: "Guest Post: How To Build an App in 48 Hours"
---

*In what we hope will be a new tradition, we've asked a member of last year's winning team to write something about what it takes to build a winning app in 48 hours.*

*This year, [Darcy Laycock](https://twitter.com/sutto) of [FindThin.gs](http://findthin.gs) was kind enough to write that something for us. So gather 'round and soak in the wisdom!*

--

## How To Build an App in 48 Hours

Given this years Rumble is coming up, Tom from the Rails Rumble team asked if I could give some advice on building the best app possible in 48 hours. To give context, last year myself and [two](https://twitter.com/sj26) [others](https://twitter.com/levibuzolic) built our entry - [FindThin.gs](http://findthin.gs) - that later went on to win the competition. With that in mind, today I'm going to share some quick tips on building the best app possible in a short period of time (and how to show how good your app is!).

## Keep It Simple

I'd like to start by emphasizing the obvious - A simpler idea is going to be easier to build in the short period of time you have. Likewise, it's also a lot easier to communicate a simple idea.

## Plan, Plan, Plan

Make a rough plan of the features you want. Plan to spend about half of your time building things - you'll likely plan too much anyway, so at least have an ordered list of what you want to get done.

## Cut Features Relentlessly

Aim to stop building features at the latest six or so hours before the end of the competition - but ideally more. This will give you time to make sure you finish everything and make sure you don't break stuff. There is nothing worse than trying to debug site-breaking issues in the last few minutes of the competition.

## Deploy Early, Deploy Often

Make deploying your application one of the first things you do - too many teams leave it until midway through the competition, which means you waste a lot of time trying to get things working when no one else is around to help.

Have an easy deploy process and make sure you test it all the time - we used a continuous integration & deployment service (like [Travis CI](http://travis-ci.com), a sponsor this year) along with our own team member Sam's [blog post on git-based deployment](http://sj26.com/2012/10/02/paas-ish-ubuntu) to make sure every push was deployed. This meant we always knew our site was live and it may have cost us an hour at the start (at most), but it saved us countless time and worry later in the competition.

## Test The Important Stuff

More than anything, even if you decide to rush most of the project, I want to stress how important it is to make sure you test the key parts of your project. Make sure you have repeatable tests for the main things users do so you don't waste important time manually testing things or, even worse, finding out post-competition your main page is broken.

## Avoid Accounts Where Possible

If you can, avoid having to create an account to use your app - the judges only have limited time to test things and have a lot of other stuff to look at. This makes it easier for you to test things as well.

If you need an account, use a guest account system, or have test accounts set up for judges with pre-filled data that they can use to explore the application.

No login is best, accounts like twitter are useful - but remember not everyone may have an account - and if all that fails, provide test accounts. As simple as that!

## Conclusion

In closing, I wish you all the best of the luck in this year's rumble - the most important part of the whole competition is to make sure you have fun! Good luck!

\- [@sutto](https://twitter.com/sutto)