== Repo to illustrate possible integration bug between sanjo:jasmine and rsbatech:robotframework velocity frameworks ==

Run `meteor`

I get the following repeated app crash log:


```console
I20150305-23:02:12.261(0)? ** You've set up some data subscriptions with Meteor.publish(), but
I20150305-23:02:12.264(0)? ** you still have autopublish turned on. Because autopublish is still
I20150305-23:02:12.265(0)? ** on, your Meteor.publish() calls won't have much effect. All data
I20150305-23:02:12.265(0)? ** will still be sent to all clients.
I20150305-23:02:12.265(0)? **
I20150305-23:02:12.266(0)? ** Turn off autopublish by removing the autopublish package:
I20150305-23:02:12.266(0)? **
I20150305-23:02:12.266(0)? **   $ meteor remove autopublish
I20150305-23:02:12.266(0)? **
I20150305-23:02:12.266(0)? ** .. and make sure you have Meteor.publish() and Meteor.subscribe() calls
I20150305-23:02:12.266(0)? ** for each collection that you want clients to see.
I20150305-23:02:12.266(0)?
W20150305-23:02:12.315(0)? (STDERR)
W20150305-23:02:12.315(0)? (STDERR) /Users/richardsmith/.meteor/packages/meteor-tool/.1.0.41.1bm7kmi++os.osx.x86_64+web.browser+web.cordova/meteor-tool-os.osx.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:173
W20150305-23:02:12.320(0)? (STDERR)             throw(ex);
W20150305-23:02:12.320(0)? (STDERR)                   ^
W20150305-23:02:12.337(0)? (STDERR) ReferenceError: Jasmine is not defined
W20150305-23:02:12.338(0)? (STDERR)     at Jasmine.onTest.jasmine.addMatchers.toBePlaying.compare.player (packages/velocity:test-proxy/tests/jasmine/server/integration/sample/spec/PlayerSpec.js:1:1)
W20150305-23:02:12.338(0)? (STDERR)     at /Users/richardsmith/Projects/meteor-test/bugrepo-jasmine-rf/.meteor/local/build/programs/server/packages/velocity_test-proxy.js:69:4
W20150305-23:02:12.338(0)? (STDERR)     at /Users/richardsmith/Projects/meteor-test/bugrepo-jasmine-rf/.meteor/local/build/programs/server/packages/velocity_test-proxy.js:176:3
W20150305-23:02:12.338(0)? (STDERR)     at /Users/richardsmith/Projects/meteor-test/bugrepo-jasmine-rf/.meteor/local/build/programs/server/boot.js:205:10
W20150305-23:02:12.338(0)? (STDERR)     at Array.forEach (native)
W20150305-23:02:12.338(0)? (STDERR)     at Function._.each._.forEach (/Users/richardsmith/.meteor/packages/meteor-tool/.1.0.41.1bm7kmi++os.osx.x86_64+web.browser+web.cordova/meteor-tool-os.osx.x86_64/dev_bundle/server-lib/node_modules/underscore/underscore.js:79:11)
=> Exited with code: 8
=> Your application is crashing. Waiting for file change.
W20150305-23:02:12.338(0)? (STDERR)     at /Users/richardsmith/Projects/meteor-test/bugrepo-jasmine-rf/.meteor/local/build/programs/server/boot.js:116:5
```