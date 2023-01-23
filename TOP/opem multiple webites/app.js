var urls = ["https://www.google.com", "https://www.facebook.com", "https://www.twitter.com"];

// for(var i=0; i<urls.length; i++){
  //window.open(urls[i], "_blank");
//}  

var button = document.getElementById("myButton");
button.addEventListener("click", myFunction);

function myFunction() {
    for(var i=0; i<urls.length; i++){
        window.open(urls[i], "_blank");
      }
}
