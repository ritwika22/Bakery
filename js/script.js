let images = [
  "url(../images/ban-1.jpg)",
  "url(../images/ban-2.jpg)",
  "url(../images/ban-3.jpg)",
]

let imagePositionY = [
  "0",
  "-60px",
  "-120px"
]

let i = 0;

function volgendefoto() {
  var r = document.querySelector(':root');

  if (i < images.length - 1) {
    i += 1;
  }
  else {
    i = 0;
  }

  r.style.setProperty('--background-banner-image', images[i]);
  r.style.setProperty('--background-position-y-banner', imagePositionY[i]);
}

setInterval(volgendefoto, 3000);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  }

});

const sandSwiper = new Swiper('.sandwich-swiper', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  }
});

function clickprep() {
  var r = document.querySelector(':root');
  r.style.setProperty('--bgchange-image', 'url(../images/sandwich2.jpg)');
}

function clickcook() {
  var r = document.querySelector(':root');
  r.style.setProperty('--bgchange-image', 'url(../images/sandwich3.jpg)');
}

function clickready() {
  var r = document.querySelector(':root');
  r.style.setProperty('--bgchange-image', 'url(../images/sandwich1.jpg)');
}