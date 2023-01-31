var urls = ["https://www.google.com", "https://www.google.com", "https://www.google.com"];
var urls2 = ["https://www.facebook.com", "https://www.facebook.com", "https://www.twitter.com"];
var urls3 = ["https://www.google.com", "https://www.facebook.com", "https://www.twitter.com"]; //change webites.



var button = document.getElementById("myButton"); //first button
button.addEventListener("click", myFunction);

function myFunction() {
    for(var i=0; i<urls.length; i++){
        window.open(urls[i], "noopener, noreferrer");
      }
}

var button = document.getElementById("myButton2"); //second button
button.addEventListener("click", myFunction);

function myFunction() {
    for(var i=0; i<urls2.length; i++){
        window.open(urls2[i], "_blank");
      }
}

var button = document.getElementById("myButton3"); //thirdbutton
button.addEventListener("click", myFunction);

function myFunction() {
    for(var i=0; i<urls3.length; i++){
        window.open(urls3[i], "_blank");
      }
}