function scrollToElement(elementSelector, instance = 0){
    // Selectall elements that mach the given selector
    const elements  =document.querySelectorAll(elementSelector);
    // Check if there  are elements matching th eselector and if the required
    if(elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior:'smooth'})
    }
} 

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});
link2.addEventListener('click', () =>{
    // Scroll to the second element with 'header' class
    scrollToElement('.header',1 );
});
link3.addEventListener('click', () =>{
    scrollToElement('.column');
});

// Get the button:
let mybutton = document.getElementById("myBtn");

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