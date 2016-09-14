# Feed Reader testing

This application is help you test a web-based application that reads RSS feeds using [Jasmine](http://jasmine.github.io/).


## Why this Application?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## How to run this application?

1. Download it from [here](https://github.com/pettibetty/frontend-nanodegree-feedreader).
2. Open the index.html file in a browser.
3. In the jasmine/spec/feedreader.js, is where all the test have been written. You would find explainations about which part of the test does what.
4. In js/app.js, you will found  our RSS feed reader application. It uses the Google
Feed Reader API to grab RSS feeds as JSON object we can make
use of. It also uses the Handlebars templating library and
jQuery.
5. In jasmine/jasmine.js, you van found more about jasmine, the methods and functoions that are used.
6. Once you have opened index.html in the browser, I will find the result of our test at the very bottom of the pages.

## Playing around with the test.

You can go to the jasmine/spec/feedreader.js and change some of the expect() to see what will happen on the browser. You can find more methods to use in jasmine/jasmine.js


