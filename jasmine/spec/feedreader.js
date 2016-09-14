/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have each a none empty URl', function() {
            for ( var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
                expect(allFeeds[i].url).not.toBeNull();
            }
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('have each a name', function() {
            for ( var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
                expect(allFeeds[i].url).not.toBeNull();
            }
         });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* This test ensures the menu element is
        * hidden by default. 
        */

        it('is hidden by default', function(){
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        /* this test ensures the menu changes
        * visibility when the menu icon is clicked. And 
        * have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        it('shows when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
        });

        it('hides when clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        

    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */   

         beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
         });
         it('should have at least one entry', function() {
            var entryList =  $('.feed .entry');
            expect(entryList.length).toBeGreaterThan(0);
            
         });
    });

        

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var oldFeeds;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeeds = $('.feed').html();
                done();
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('should change when a new feed is loaded', function(done) {
            loadFeed(1, function() {
                expect($('.feed').html() !== oldFeeds).toBeTruthy();
                done();
            });
        });
    });
        
}());
