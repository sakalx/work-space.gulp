//Main Slider
(function() {

	var slide__index = 1;

	slide__show(slide__index);
	autoCarousel();
/*_______________________________________________________*/
//function for automatic shifting
function autoCarousel() {
	slide__show(slide__index += 0);
	slide__index++;
	setTimeout(autoCarousel, 5000);
}
/*_______________________________________________________*/
//function for shifting with arrows
//Event for Slide left
document.getElementById('mainSlide__left').addEventListener('click', function() {
	slide__show(slide__index += -1);
});
//Event for Slide right
document.getElementById('mainSlide__right').addEventListener('click', function() {
	slide__show(slide__index += 1);
});
/*_______________________________________________________*/
//function for shifting with dots
(function() {
	var slide__dots = document.getElementsByClassName('mainSlide__dots');

	function slide__shiftingDot(i) {
		return function(){
			slide__show(slide__index = i);
		};
	}

	for(var i = 0; i < slide__dots.length; i++) {
		slide__dots[i].addEventListener('click', slide__shiftingDot(i+1) );
	}
})();
/*_______________________________________________________*/
function slide__show(n) {
	var i,
	x = document.getElementsByClassName("mainSlide__slide"),
	dots = document.getElementsByClassName("mainSlide__dots");

	if (n > x.length) 
		{ slide__index = 1; }    
	if (n < 1) 
		{ slide__index = x.length; }

	for (i = 0; i < x.length; i++) {
			x[i].style.display = "none"; 
	}
	x[slide__index-1].style.display = "flex";  
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" mainSlide__dot--active", "");
	}
	dots[slide__index-1].className += " mainSlide__dot--active";
}
})();
/*_______________________________________________________*/