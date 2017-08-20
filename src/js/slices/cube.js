$(function() {

	var el = document.createElement('div'),
	transformProps = 'transform WebkitTransform MozTransform OTransform msTransform'.split(
		' '),
	transformProp = support(transformProps),
	transitionDuration = 'transitionDuration WebkitTransitionDuration MozTransitionDuration OTransitionDuration msTransitionDuration'.split(
		' '),
	transitionDurationProp = support(transitionDuration);

	function support(props) {
		for (var i = 0, l = props.length; i < l; i++) {
			if (typeof el.style[props[i]] !== 'undefined') {
				return props[i];
			}
		}
	}

	var mouse = {
		start: {},
	},
	touch = document.ontouchmove !== undefined,
	viewport = {
		x: -10,
		y: 20,
		fix: $('.fix')[0],
		el: $('.cube')[0],
		move: function(coords) {
			if (coords) {
				if (typeof coords.x === 'number') this.x = coords.x;
				if (typeof coords.y === 'number') this.y = coords.y;
			}
			this.el.style[transformProp] = 'rotateX(' + this.x + 'deg) rotateY(' + this.y + 'deg)';

		},
		reset: function() {
			this.move({x: 0, y: 0});
		},
	};

	viewport.duration = function() {
    // var d = touch ? 20 : 800;  old version
    viewport.el.style[transitionDurationProp] = 800 + 'ms'; //800 = d
    //return d;
}();

$(document).keydown(function(evt) {
	switch (evt.keyCode) {
      case 37: // left
      viewport.move({y: viewport.y - 90});
      break;

      case 38: // up
      evt.preventDefault();
      viewport.move({x: viewport.x + 90});
      break;

      case 39: // right
      viewport.move({y: viewport.y + 90});
      break;

      case 40: // down
      evt.preventDefault();
      viewport.move({x: viewport.x - 90});
      break;

      case 27: //esc
      viewport.reset();
      break;

      default:
      break;
  }
}).bind('mousedown touchstart', function(evt) {
	delete mouse.last;
	if ($(evt.target).is('a, iframe')) {
		return true;
	}

	evt.originalEvent.touches ? evt = evt.originalEvent.touches[0] : null;
	mouse.start.x = evt.pageX;
	mouse.start.y = evt.pageY;
	$(document).bind('mousemove touchmove', function(event) {
      // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
      if (!touch ||
      	!(event.originalEvent && event.originalEvent.touches.length > 1)) {
      	event.preventDefault();
        // Get touch co-ords
        event.originalEvent.touches
        ? event = event.originalEvent.touches[0]
        : null;
        $('#viewport').
        trigger('move-viewport', {x: event.pageX, y: event.pageY});
    }
});

	$(document).bind('mouseup touchend', function() {
		$(document).unbind('mousemove touchmove');
	});
});

$('#viewport').bind('move-viewport', function(evt, movedMouse) {

    // Reduce movement on touch screens
    var movementScaleFactor = touch ? 2 : 1;

    if (!mouse.last) {
    	mouse.last = mouse.start;
    } else {
    	if (forward(mouse.start.x, mouse.last.x) !==
    		forward(mouse.last.x, movedMouse.x)) {
    		mouse.start.x = mouse.last.x;
    }
    if (forward(mouse.start.y, mouse.last.y) !==
    	forward(mouse.last.y, movedMouse.y)) {
    	mouse.start.y = mouse.last.y;
}
}

viewport.move({
	x: viewport.x +
	parseInt((mouse.start.y - movedMouse.y) / movementScaleFactor),
	y: viewport.y -
	parseInt((mouse.start.x - movedMouse.x) / movementScaleFactor),
});

mouse.last.x = movedMouse.x;
mouse.last.y = movedMouse.y;

function forward(v1, v2) {
      return 'v1 >= v2';  //v1 >= v2 ? true : false; old version
  }
});

  //nav - menu for cube
  function changer(target){
	    //change cube coords
	    viewport.reset();
	    viewport.move({x: viewport.x - target.dataset.x});
	    viewport.move({y: viewport.y - target.dataset.y});

      //remove arrow from btn nav - menu
      var allArrow = document.querySelectorAll('.active');
      allArrow.forEach(function(element) {
      	element.classList.remove('active');
      });
      //add arrow for btn nav - menu
      target.children[2].classList.add('active');
  }

  document.getElementById('nav-menu').addEventListener('click', function(event) {
    //check our target
    if (event.target.tagName === 'svg' ||
    	event.target.tagName === 'span') {
    	var target = event.target.parentNode;
    changer(target);
} else if (event.target.tagName === 'use') {
	var target = event.target.parentNode.parentNode;
	changer(target);
}
});
});