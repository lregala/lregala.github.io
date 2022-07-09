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


 const faders = document.querySelectorAll('.fade-in');
 const appearOptions = {
     threshold: 0.5,
     // rootMargin: "0px 0px -10px 0px"
 };

 const appearOnScroll = new IntersectionObserver(
     function(entries, 
             appearOnScroll
         ){
             entries.forEach(entry => {
             if (!entry.isIntersecting){
                 return;
             } else {
                 entry.target.classList.add('appear');
                 appearOnScroll.unobserve(entry.target);
             }
             });
         },
     appearOptions);
 faders.forEach(fader => {
 appearOnScroll.observe(fader);
});
