//Slider
  var slideIndexs = 1;
  showDivs(slideIndexs);

function plusDivs(n) {
  showDivs(slideIndexs += n);
}

function currentDiv(n) {
  showDivs(slideIndexs = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__slide");
  var dots = document.getElementsByClassName("slider__dot");
  if (n > x.length) {slideIndexs = 1; }    
  if (n < 1) {slideIndexs = x.length; }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" slider__dot--active", "");
  }
  x[slideIndexs-1].style.display = "flex";  
  dots[slideIndexs-1].className += " slider__dot--active";
}