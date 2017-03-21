// Your code here!
//var Instafeed = require("instafeed.min.js");

// AMD
//require(["instafeed.min.js"], function (Instafeed) {

//    var feed = new Instafeed({
//        get: 'tagged',
//        tagName: 'awesome',
//        clientId: ''
//    });
//    feed.run();
//    alert(feed)
//console.log(feed);

//});

// Initialize
API = Instajam.init({
    clientId: mine.clientID,
    redirectUri: 'https://rudrastyh.com/tools/access-token',
    scope: ['basic', 'comments']
});

// Get the profile of the authenticated user.
API.user.self.profile(function (response) {
    console.log('Hey there, ' + response.data.full_name);
});

window.onload = function () {
    document.getElementById("button").onclick = function (evt) {
        sayHello()
    }
}


function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello, world!", "Alert");
    messageDialog.showAsync();
}

function displayWebSite() {
    var wv = new Windows.UI.WebUI.
}