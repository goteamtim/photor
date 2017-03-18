// Your code here!
var Instafeed = require("https://raw.githubusercontent.com/stevenschobert/instafeed.js/master/instafeed.min.js");

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: ''
});
feed.run();
console.log(feed);

window.onload = function () {
    document.getElementById("button").onclick = function (evt) {
        sayHello()
    }
}


function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello, world!", "Alert");
    messageDialog.showAsync();
}