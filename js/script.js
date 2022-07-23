"use strict";


let mybutton = document.getElementById("myBtn"); //Get the button:


 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }


 window.addEventListener('resize', (event) => {
    var AR = window.innerHeight/window.innerWidth;
    var linearWidth = window.innerWidth+window.innerHeight;
    var perimeter = window.innerWidth+window.innerHeight+window.innerWidth+window.innerHeight;
    console.log(AR);
    
});