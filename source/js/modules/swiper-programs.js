import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const jurySwiper = new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar],
  speed: 600,
  direction: 'horizontal',
  scrollbar: {
    el: '.programs__scrollbar',
    dragClass: 'programs__scrollbar-drag',
    draggable: true,
  },
  navigation: {
    nextEl: '.programs__button-slider--next',
    prevEl: '.programs__button-slider--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  }
});


jurySwiper.init();
