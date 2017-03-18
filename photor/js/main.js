// Your code here!
//var Instafeed = require("instafeed.min.js");

// AMD
//require(["instafeed.min.js"], function (Instafeed) {

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: ''
    });
    feed.run();
    alert(feed)
console.log(feed);

//});



window.onload = function () {
    document.getElementById("button").onclick = function (evt) {
        sayHello()
    }
}


function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello, world!", "Alert");
    messageDialog.showAsync();
}