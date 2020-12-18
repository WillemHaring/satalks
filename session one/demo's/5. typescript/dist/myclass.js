"use strict";
var myclass = /** @class */ (function () {
    function myclass() {
        console.log('creating myclass)');
    }
    myclass.prototype.print = function (message, counter) {
        console.log("this is " + message + " with number " + counter);
    };
    return myclass;
}());
var c = new myclass();
c.print("friday", 6);
