// Scroll to the text 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 1) {        
      $('#click-to-bottom').fadeIn(0);    
  }
});
$('#click-to-bottom').click(function() {      
  $('body,html').animate({
      scrollTop : 1000                      
  }, 500);
});

// Scroll to Top 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        
      $('#return-to-top').fadeIn(200);    
  } else {
      $('#return-to-top').fadeOut(200);   
  }
});
$('#return-to-top').click(function() {     
  $('body,html').animate({
      scrollTop : 0                      
  }, 500);
});

// slideshow

var slideIndex = 0;
carousel();

 function currentSlide(n) {
  carousel(slideIndex = n);
 }

function carousel() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  

  setTimeout(carousel, 4000); 
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
}
