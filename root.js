function hover(id) {
  document.getElementById(id).style.background = "white";
  document.getElementById(id).style.color = "black";
}

function offhover(id) {
  document.getElementById(id).style.background = "";
  document.getElementById(id).style.color = "";
}

function footer() {
  var update = new Date(document.lastModified)
  var modMonth = update.getMonth() + 1
  var modDate = update.getDate()
  var modYear = update.getFullYear()
  document.write("Benjamin Trang &#169; " + modMonth + "/" + modDate + "/" + modYear);
}


/* below is all js for the image slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sliderimg");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}
