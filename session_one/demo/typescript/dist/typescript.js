"use strict";
var globalsettings = require('../package.json');
var myclass = /** @class */ (function () {
    function myclass() {
        console.log('creating myclass)');
    }
    myclass.prototype.print = function (message, counter) {
        console.log("this is " + message + " with number " + counter);
    };
    return myclass;
}());
console.log("version: " + globalsettings.version);
var c = new myclass();
c.print("friday", "this is a string");
