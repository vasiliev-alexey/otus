
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok( 1===1 === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(1===2 === false, 'what is a false value?');
});

test("equal", function() {
    equal(2-0, 1 + 1, 'what will satisfy the equal assertion?');
});
