/* VARIABLES 
------------------------------------------------------- */

// Video
var $video = $("#video");
var $videoContainer = $("#videoContainer");

// Video Control s
var $videoControls = $("#videoControls");
var $buttonControls = $("#buttonControls");
var $progressBar = $("#progressBar");
var $progress = $("#progress");
var $playButton = $("#play");
var $muteButton = $("#mute");
var $volumeSlider = $("#volumeSlider");
var $fullScreenBtn = $("#fullScreen");
var $duration = $("#duration");
var $fastFwd = $("#fastFwd");
var $title = $("#sc-video__title")

/* VIDEO TITLE
 ------------------------------------------------------- */
$title.click(function() {
    playVideo();
    $title.css("display", "none");
});

/* VIDEO PLAYER 
------------------------------------------------------- */

// Toggles play/pause for the video
function playVideo() {      
	if($video[0].paused) {
		$video[0].play();
		$playButton.find("img").attr("src", "img/iconsVideo/pause-icon.png");
		$buttonControls.hide();
		$videoControls.css("margin-top", "5%");
	} else {
		$video[0].pause();
		$playButton.find("img").attr("src", "img/iconsVideo/play-icon.png");
        $title.css("display", "flex");
	}		
}

// Mutes the video
function muteVideo() {
	if ($video[0].muted === false) {
		$video[0].muted = true;
		$muteButton.find("img").attr("src", "img/iconsVideo/volume-off-icon.png");
	} else {
		$video[0].muted = false;
		$muteButton.find("img").attr("src", "img/iconsVideo/volume-on-icon.png");
	}	
}

// Changes video playback rate
function changeSpeed() {
	if($video[0].playbackRate === 1) {
		$video[0].playbackRate = 2;
		$fastFwd.text("2x Speed");
	} else if ($video[0].playbackRate === 2) {
		$video[0].playbackRate = 1;
		$fastFwd.text("1x Speed");				
	}
}

function launchFullscreen() {
  if($video[0].requestFullscreen) {
    $video[0].requestFullscreen();
  } else if($video[0].mozRequestFullScreen) {
    $video[0].mozRequestFullScreen();
  } else if($video[0].webkitRequestFullscreen) {
    $video[0].webkitRequestFullscreen();
  } else if($video[0].msRequestFullscreen) {
    $video[0].msRequestFullscreen();
  }
}



// Play/pause on video click
$video.click(function() {
	playVideo();
});

// Play/pause on spacebar 
$("body").on("keydown", function(e) {
	if(e.keyCode === 32 ) {	
		e.preventDefault();		
		playVideo();     
	}
});

// Mute/sound on m key
$("body").on("keydown", function(e) {
	if(e.keyCode === 77 ) {
		e.preventDefault();		
		muteVideo();
	}
});

// Video duration timer
$video.on("timeupdate", function() {
	var $videoTime = $video[0].currentTime;
	if ($videoTime < 9.5) {
		$duration.html("0:0" + Math.round($videoTime) + "&nbsp;/&nbsp;");
	} else {
		$duration.html("0:" + Math.round($videoTime) + "&nbsp;/&nbsp;");
	}
});
// Video Total Time
(function(window) {
    var videoNode = window.document.querySelector('video');
    var timeNode = window.document.querySelector('#totalTime');
    videoNode.addEventListener('loadedmetadata', function(e) {
        var duration = videoNode.duration.toFixed();
        var m = duration % 60;
        timeNode.innerText = Math.round(duration / 60) + ':' + (m < 10 ? '0' : '') + m;
    });
})(window);

/* VIDEO CONTROLS
------------------------------------------------------- */
// Hide button controls
$buttonControls.hide();
$videoControls.css("margin-top", "5%");

// Hide button controls when video is playing
/*$videoContainer.on("mouseleave", function() {
	if($video[0].paused === false) {
		$buttonControls.hide();
		$videoControls.css("margin-top", "5%");	  
	}
});*/

// Show button controls on hover
/*$videoContainer.on("mouseover", function() {
		$buttonControls.show();
		$videoControls.css("margin-top", "0");	
});*/

// Progress bar
$progressBar[0].addEventListener("change", function() {
	var time = $video[0].duration * ($progressBar[0].value / 100);
	$video[0].currentTime = time;
}); 

// Update progress bar as video plays
$video[0].addEventListener("timeupdate", function() { 
	var value = (100 / $video[0].duration) * $video[0].currentTime;
	$progress.css("width", value+"%");	
}); 

// Play/pause on button click
$playButton.click(function() {
	playVideo();
});

// 2x speed with right arrow
$("body").on("keydown", function(e) {
	if(e.keyCode === 39) {	
		e.preventDefault();		
		changeSpeed();
	}
});
// Normal Speed
$("body").on("keydown", function(e) {
	if(e.keyCode === 37) {	
		e.preventDefault();		
		changeSpeed();
	}
});

// Fast Forward Button 
$fastFwd.click(function() {
	changeSpeed();
});

// Mute video on button click
$muteButton.click(function() {
	muteVideo();
});

// Volue slider
$volumeSlider.on("change", function(){ 
	$video[0].volume = $volumeSlider[0].value;
});

/* Fullscreen on button click
$fullScreenBtn.click(function() {
	if ($video[0].webkitRequestFullscreen()) {
		$video[0].webkitRequestFullscreen();
	} else if ($video[0].mozRequestFullScreen()) {
		$video[0].mozRequestFullScreen();
	} else if ($video[0].msRequestFullScreen()) {
		$video[0].msRequestFullScreen();
	}
}); */

$fullScreenBtn.click(function() {
	launchFullscreen();
}); 

