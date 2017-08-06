var cube = document.getElementById('viewport');

var CubeContent = {
  works:       document.getElementById('works__content'),
  profile:     document.getElementById('profile__content'),
  services:    document.getElementById('services__content'),
  cooperation: document.getElementById('cooperation__content'),
  knowledge:   document.getElementById('knowledge__content'),
  contact:     document.getElementById('contact__content')
};
var CubeSide = {
  works:       document.getElementById('works__show-content'),
  profile:     document.getElementById('profile__show-content'),
  services:    document.getElementById('services__show-content'),
  cooperation: document.getElementById('cooperation__show-content'),
  knowledge:   document.getElementById('knowledge__show-content'),
  contact:     document.getElementById('contact__show-content')
};


// Nandi
function nandiShow() {
  cubeSize();
  CubeContent.contact.parentNode.style.visibility = 'visible';
    anime({
      targets: CubeContent.contact,
      duration: 300,
      easing: 'easeOutExpo',
      scale: {
        value: [0, 1],
        easing: 'easeInOutSine'
      },
      translateY: {
        value: [0, -200]
      },
      opacity: {
        value: 1,
        duration: 50,
        easing: 'linear'
      }
    });

    anime({
      targets: CubeContent.contact.children,
      duration: 1200,
      delay: function delay(t, i) {
        return i * 280 + 500;
      },
      easing: [0.1, 1, 0.3, 1],
      scale: [0, 1]
    });
}
function nandiHide() {
  cubeSize();
  anime({
    targets: CubeContent.contact,
    duration: 500,
    easing: 'easeInOutSine',
    scale: {
      value: [1, 0],
      easing: 'easeOutExpo'
    },
    translateY: 0,
    opacity: {
      value: 0,
      duration: 50,
      delay: 200,
      easing: 'linear'
    }
  });

  anime({
    targets: CubeContent.contact.children,
    duration: 100,
    easing: 'easeOutQuad',
    scale: 0
  });
  setTimeout(function() {
    CubeContent.contact.parentNode.style.visibility = 'hidden';
  }, 460);
}

//Devi
function deviShow() {
  cubeSize();
  CubeContent.profile.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.profile.children,
    duration: 700,
    delay: function delay(t, i, c) {
      return (c - i - 1) * 40;
    },
    easing: [0.2, 1, 0.3, 1],
    translateY: function translateY(t, i, c) {
      var radius = 150,
          startAngle = Math.PI / c * 2,
          angle = startAngle / 2 + startAngle * i;

      return Math.round((-1 * radius * Math.sin(angle)) / 4.5) + 'vh';
    },
    translateX: function translateX(t, i, c) {
      var radius = 150,
          startAngle = Math.PI / c * 2,
          angle = startAngle / 2 + startAngle * i;

      return Math.round((-1 * radius * Math.cos(angle)) / 4) + 'vw';
    },
    scale: [0.7, 1],
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear'
    }
  });
}
function deviHide() {
  cubeSize();
  anime({
    targets: CubeContent.profile.children,
    duration: 600,
    delay: function delay(t, i, c) {
      return (c - i - 1) * 40;
    },
    easing: [0.2, 1, 0.3, 1],
    translateY: 0,
    translateX: 0,
    scale: [1, 0.7],
    opacity: {
      value: 0,
      duration: 10,
      delay: function delay(t, i, c) {
        return (c - i - 1) * 40 + 600;
      },
      easing: 'linear'
    }
  });
  setTimeout(function() {
    CubeContent.profile.parentNode.style.visibility = 'hidden';
  }, 520);
}

//Rudras
function rudrasShow() {
  cubeSize();
  CubeContent.services.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.services.children,
    duration: 800,
      delay: function delay(t, i, c) {
    return (c - i - 1) * 260;
  },
  easing: 'easeOutElastic',
      translateY: function translateY(t, i, c) {
    var radius = 130,
        startAngle = Math.PI / c * 2,
        angle = startAngle / 2 + startAngle * i;

    return Math.round((-1 * radius * Math.sin(angle)) / 4) + 'vh';
  },
  translateX: function translateX(t, i, c) {
    var radius = 130,
        startAngle = Math.PI / c * 2,
        angle = startAngle / 2 + startAngle * i;

    return Math.round((radius * Math.cos(angle)) / 4) + 'vw';
  },
  scale: [0, 1],
      opacity: {
    value: 1,
        duration: 10,
        easing: 'linear'
  }
});
}
function rudrasHide() {
  cubeSize();
  anime({
    targets: CubeContent.services.children,
    duration: 300,
    delay: function delay(t, i, c) {
      return i * 40;
    },
    easing: 'easeInBack',
    translateY: 0,
    translateX: 0,
    scale: [1, 0],
    opacity: {
      value: 0,
      duration: 10,
      delay: function delay(t, i, c) {
        return i * 40 + 300;
      },
      easing: 'linear'
    }
  });
  setTimeout(function() {
    CubeContent.services.parentNode.style.visibility = 'hidden';
  }, 660);
}

//Durga
function durgaShow() {
  cubeSize();
  CubeContent.cooperation.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.cooperation.children,
    duration: 4000,
    delay: function delay(t, i, c) {
      return (c - i - 1) * 260;
    },
    easing: 'easeOutElastic',
    translateY: function translateY(t, i, c) {
      var radius = 130,
          startAngle = Math.PI / c * 2,
          angle = startAngle / 2 + startAngle * i;

      return Math.round((1 * radius * Math.sin(angle)) / 4) + 'vh';
    },
    translateX: function translateX(t, i, c) {
      var radius = 130,
          startAngle = Math.PI / c * 2,
          angle = startAngle / 2 + startAngle * i;

      return Math.round((radius * Math.cos(angle)) / 4) + 'vw';
    },
    scale: [0, 1],
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear'
    }
  });
}
function durgaHide() {
  cubeSize();
  anime({
    targets: CubeContent.cooperation.children,
    duration: 600,
    delay: function delay(t, i, c) {
      return i * 40;
    },
    easing: 'easeInBack',
    translateY: 0,
    translateX: 0,
    scale: [1, 0],
    opacity: {
      value: 0,
      duration: 10,
      delay: function delay(t, i, c) {
        return i * 40 + 500;
      },
      easing: 'linear'
    }
  });
  setTimeout(function() {
    CubeContent.cooperation.parentNode.style.visibility = 'hidden';
  }, 660);
}

//Ardra
function ardraShow() {
  cubeSize();
  CubeContent.knowledge.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.knowledge.children,
    duration: 500,
    easing: [0.1, 1, 0.3, 1],
    translateY: function translateY(t, i, c) {
      var radius = anime.random(110, 160);
      return Math.round((radius * Math.sin(2 * (i + 1) * Math.PI / c)) / 4) + 'vh';
    },
    translateX: function translateX(t, i, c) {
      var radius = anime.random(110, 160);
      return Math.round((radius * Math.cos(2 * (i + 1) * Math.PI / c)) / 4.5) + 'vw';
    },
    rotate: function rotate(t, i, c) {
      return [0, anime.random(-5, 5) + 'deg'];
    },
    scale: [0.4, 1],
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear'
    }
  });

  anime({
    targets: document.getElementById('knowledge__sonar'),
    easing: [0.1, 1, 0.3, 1],
    opacity: [{
      value: 1,
      duration: 20
    }, {
      value: 0,
      duration: 400,
      delay: 50
    }],
    scale: {
      value: [1, 10],
      duration: 900
    }
  });
}
function ardraHide() {
  cubeSize();
  anime({
    targets: CubeContent.knowledge.children,
    duration: 500,
    easing: [0.1, 1, 0.3, 1],
    translateY: 0,
    translateX: 0,
    rotate: 0,
    scale: [1, 0.4],
    opacity: {
      value: 0,
      duration: 250,
      delay: 250,
      easing: 'linear'
    }
  });
  setTimeout(function() {
    CubeContent.knowledge.parentNode.style.visibility = 'hidden';
  }, 440);
}


//Ravi
function raviShow(){
  cubeSize();
  CubeContent.works.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.works.children,
    duration: 400,
    easing: [0.1, 1, 0.3, 1],
    translateY: -180,
    translateX: function translateX(t, i, c) {
      var interval = 100;
      return (-1 * interval * Math.floor(c / 2) + interval * i + (c / 2 % 1 != 0 ? 0 : interval / 2)) / 5 + 'vw';
    },
    rotate: function rotate(t, i, c) {
      var interval = 30;
      return -1 * interval * Math.floor(c / 2) + interval * i + (c / 2 % 1 != 0 ? 0 : interval / 2) + 'deg';
    },
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear'
    }
  });
}

function raviHide() {
  cubeSize();
  anime({
    targets: CubeContent.works.children,
    duration: 300,
    easing: 'easeInBack',
    translateY: 0,
    translateX: 0,
    rotate: 0,
    scale: [1, 0.8],
    opacity: {
      value: 0,
      duration: 10,
      delay: 300,
      easing: 'linear'
    }
  });

  anime({
    targets: document.getElementById('sonar--2'),
    delay: 350,
    easing: [0.1, 1, 0.3, 1],
    opacity: [{
      value: 1,
      duration: 10
    }, {
      value: 0,
      duration: 500,
      delay: 20
    }],
    scale: {
      value: [1, 7],
      duration: 800
    }
  });
  setTimeout(function() {
    CubeContent.works.parentNode.style.visibility = 'hidden';
  }, 750);
}

/************************************************************************
 * ReSize Cube
 ************************************************************************/
function cubeSize() {
  var cube = document.getElementById('viewport');
  if (cube.classList.contains('shrink')) {
    cube.classList.remove('shrink');
  } else {
    cube.classList.add('shrink');
  }
}
/************************************************************************
 * 1: works
 ************************************************************************/
CubeSide.works.addEventListener('click', raviShow);
CubeContent.works.parentNode.addEventListener('click', raviHide);

/************************************************************************
 * 2: profile
 ************************************************************************/
CubeSide.profile.addEventListener('click', deviShow);
CubeContent.profile.parentNode.addEventListener('click', deviHide);

/************************************************************************
 * 3: services
 ************************************************************************/
CubeSide.services.addEventListener('click', rudrasShow);
CubeContent.services.parentNode.addEventListener('click', rudrasHide);

/************************************************************************
 * 4: cooperation
 ************************************************************************/
CubeSide.cooperation.addEventListener('click', durgaShow);
CubeContent.cooperation.parentNode.addEventListener('click', durgaHide);

/************************************************************************
 * 5: knowledge
 ************************************************************************/
CubeSide.knowledge.addEventListener('click', ardraShow);
CubeContent.knowledge.parentNode.addEventListener('click', ardraHide);

/************************************************************************
 * 6: contact
 ************************************************************************/
CubeSide.contact.addEventListener('click', nandiShow );
document.getElementById('contact__close').addEventListener('click', nandiHide);
