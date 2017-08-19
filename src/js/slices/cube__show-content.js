var CubeEnvironment = {
  cube: document.getElementById('viewport'),
  header: document.getElementById('header').style,
};
var CubeContent = {
  works: document.getElementById('works__content'),
  profile: document.getElementById('profile__content'),
  services: document.getElementById('services__content'),
  cooperation: document.getElementById('cooperation__content'),
  knowledge: document.getElementById('knowledge__content'),
  contact: document.getElementById('contact__content'),
};

// Nandi
function nandiShow() {
  optimizeEl();
  CubeContent.contact.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.contact,
    duration: 300,
    easing: 'easeOutExpo',
    scale: {
      value: [0, 1],
      easing: 'easeInOutSine',
    },
    translateY: {
      value: [0, -200],
    },
    opacity: {
      value: 1,
      duration: 50,
      easing: 'linear',
    },
  });

  anime({
    targets: [
      CubeContent.contact.children[0],
      CubeContent.contact.children[1].children,
      CubeContent.contact.children[2],
      CubeContent.contact.children[3],
      CubeContent.contact.children[4].children,
    ],
    duration: 1500,
    delay: function delay(t, i) {
      return i * 500;
    },
    easing: [0.1, 1, 0.3, 1],
    scale: [0, 1],
  });
}
function nandiHide() {
  unOptimizeEl();
  anime({
    targets: CubeContent.contact,
    duration: 500,
    easing: 'easeInOutSine',
    scale: {
      value: [1, 0],
      easing: 'easeOutExpo',
    },
    translateY: 0,
    opacity: {
      value: 0,
      duration: 50,
      delay: 200,
      easing: 'linear',
    },
  });

  anime({
    targets: [
      CubeContent.contact.children[0],
      CubeContent.contact.children[1].children,
      CubeContent.contact.children[2],
      CubeContent.contact.children[3],
      CubeContent.contact.children[4].children,
    ],
    duration: 100,
    easing: 'easeOutQuad',
    scale: 0,
  });
  setTimeout(function() {
    CubeContent.contact.parentNode.style.visibility = 'hidden';
  }, 460);
}

//Devi
function deviShow() {
  optimizeEl();
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
      easing: 'linear',
    },
  });
}
function deviHide() {
  unOptimizeEl();
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
      easing: 'linear',
    },
  });
  setTimeout(function() {
    CubeContent.profile.parentNode.style.visibility = 'hidden';
  }, 520);
}

//Rudras
function rudrasShow() {
  optimizeEl();
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
      easing: 'linear',
    },
  });
}
function rudrasHide() {
  unOptimizeEl();
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
      easing: 'linear',
    },
  });
  setTimeout(function() {
    CubeContent.services.parentNode.style.visibility = 'hidden';
  }, 660);
}

//Durga
function durgaShow() {
  optimizeEl();
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
      easing: 'linear',
    },
  });
}
function durgaHide() {
  unOptimizeEl();
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
      easing: 'linear',
    },
  });
  setTimeout(function() {
    CubeContent.cooperation.parentNode.style.visibility = 'hidden';
  }, 660);
}

//Ardra
function ardraShow() {
  optimizeEl();
  CubeContent.knowledge.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.knowledge.children,
    duration: 500,
    easing: [0.1, 1, 0.3, 1],
    translateY: function translateY(t, i, c) {
      var radius = anime.random(110, 160);
      return Math.round((radius * Math.sin(2 * (i + 1) * Math.PI / c)) / 4) +
          'vh';
    },
    translateX: function translateX(t, i, c) {
      var radius = anime.random(110, 160);
      return Math.round((radius * Math.cos(2 * (i + 1) * Math.PI / c)) / 4) +
          'vw';
    },
    rotate: function rotate(t, i, c) {
      return [0, anime.random(-5, 5) + 'deg'];
    },
    scale: [0.4, 1],
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear',
    },
  });

  anime({
    targets: document.getElementById('knowledge__sonar'),
    easing: [0.1, 1, 0.3, 1],
    opacity: [
      {
        value: 1,
        duration: 20,
      }, {
        value: 0,
        duration: 400,
        delay: 50,
      }],
    scale: {
      value: [1, 10],
      duration: 900,
    },
  });
}
function ardraHide() {
  unOptimizeEl();
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
      easing: 'linear',
    },
  });
  setTimeout(function() {
    CubeContent.knowledge.parentNode.style.visibility = 'hidden';
  }, 440);
}

//Ravi
function raviShow() {
  optimizeEl();
  CubeContent.works.parentNode.style.visibility = 'visible';
  anime({
    targets: CubeContent.works.children,
    duration: 400,
    easing: [0.1, 1, 0.3, 1],
    translateY: -180,
    translateX: function translateX(t, i, c) {
      var interval = 100;
      return (-1 * interval * Math.floor(c / 2) + interval * i +
          (c / 2 % 1 != 0 ? 0 : interval / 2)) / 7 + 'vw';
    },
    rotate: function rotate(t, i, c) {
      var interval = 30;
      return -1 * interval * Math.floor(c / 2) + interval * i +
          (c / 2 % 1 != 0 ? 0 : interval / 2) + 'deg';
    },
    opacity: {
      value: 1,
      duration: 10,
      easing: 'linear',
    },
  });
}

function raviHide() {
  unOptimizeEl();
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
      easing: 'linear',
    },
  });

  anime({
    targets: document.getElementById('sonar--2'),
    delay: 350,
    easing: [0.1, 1, 0.3, 1],
    opacity: [
      {
        value: 1,
        duration: 10,
      }, {
        value: 0,
        duration: 500,
        delay: 20,
      }],
    scale: {
      value: [1, 7],
      duration: 800,
    },
  });
  setTimeout(function() {
    CubeContent.works.parentNode.style.visibility = 'hidden';
  }, 750);
}
/************************************************************************
 * optimize Elements for better view
 ************************************************************************/
function optimizeEl() {
  CubeEnvironment.cube.classList.add('shrink');
  CubeEnvironment.header.visibility = 'hidden';
}
function unOptimizeEl() {
  CubeEnvironment.cube.classList.remove('shrink');
  CubeEnvironment.header.visibility = 'visible';
}
/************************************************************************
 * listener Show
 ************************************************************************/
function showContent(e) {
  const target = e.target.tagName;
//need to listen to targets
  if (
      target === 'H2' ||
      target === 'SPAN' ||
      target === 'svg' ||
      target === 'use'
  ) {
//find parent with data
    e.path.forEach(function(e) {
      if (e.tagName === 'SECTION') {
//show content
        switch (e.dataset.side) {
            // front - profile
          case 'front':
            deviShow();
            break;
            // right - services
          case 'right':
            rudrasShow();
            break;
            // back - cooperation
          case 'back':
            durgaShow();
            break;
            // left - knowledge
          case 'left':
            ardraShow();
            break;
          // top-side
          case 'top':
            raviShow();
            break;
          // bottom - contact
          case 'bottom':
            nandiShow();
        }
      }
    });
  }
}
CubeEnvironment.cube.addEventListener('click', showContent);
/************************************************************************
 * listeners Hide
 ************************************************************************/
 // 1: works
CubeContent.works.parentNode.addEventListener('click', raviHide);
// 2: profile
CubeContent.profile.parentNode.addEventListener('click', deviHide);
// 3: services
CubeContent.services.parentNode.addEventListener('click', rudrasHide);
// 4: cooperation
CubeContent.cooperation.parentNode.addEventListener('click', durgaHide);
// 5: knowledge
CubeContent.knowledge.parentNode.addEventListener('click', ardraHide);
// 6: contact
document.getElementById('contact__close').addEventListener('click', nandiHide);
