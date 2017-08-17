;(() => {
	'use strict';


//JSON with img
const 
dataImg = [
{src: 'https://sakals.000webhostapp.com/share/slide1.jpg'},
{src: 'https://sakals.000webhostapp.com/share/slide2.jpg'},
{src: 'https://sakals.000webhostapp.com/share/slide3.jpg'}
];


const
slide 	= document.getElementById('gallery__slide'),
dots 	= document.getElementById('gallery__dots'),
arrows 	= document.getElementById('gallery__arrows');


//Factory for creating img items
const creatEl = (loc, sr, cl) => {
	const x = document.createElement('img');
	x.classList.add(cl);
	x.src = sr;
	loc.appendChild(x);
	return x;
};


//Render slide img
const renderGallery = () => creatEl(slide, dataImg[1].src, 'gallery__slide');
renderGallery();

//Render slide dots 
const renderDots = imgSrc => creatEl(dots, imgSrc, 'gallery__dots-img');
const dotArr 	 = dataImg.map(x => renderDots(x.src));


//switch Img using dots
const switchImg = dots => {
	if (!!dots.target.src) {
		slide.children[0].src = dots.target.src;
		activeDot();
	}
}
dots.addEventListener('click', switchImg);


//switch Img using arrows
const switchSlide = e => { 

//check if it's btn
if (!!+e.target.dataset.switch) {

	const
	imgArr = dataImg.map(x => x.src),
	n	   = +e.target.dataset.switch;

//Looping for slider
const switcher = index => {
	slide.children[0].src = imgArr[index + n];
	if (index === 0  && n < 0) {
		slide.children[0].src = imgArr[imgArr.length - 1];
	}
	if (index === imgArr.length - 1 && n > 0) 
		slide.children[0].src = imgArr[0];
};

//find index of active img
for (let i in imgArr) {
	if (slide.children[0].src === imgArr[i]) {
		const index = imgArr.indexOf(imgArr[i]);
		switcher(index);
		break;	
	}
}
activeDot();
}
};


//add class active Dot
const activeDot = () => {
	for (let i in dataImg) {
		dotArr[i].classList.remove('gallery__dots-img--act');
		if (slide.children[0].src === dataImg[i].src) 
			dotArr[i].classList.add('gallery__dots-img--act');	
	}
};

arrows.addEventListener('click', switchSlide);
activeDot();

}
)();

