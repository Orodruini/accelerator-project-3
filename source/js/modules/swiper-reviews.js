import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const jurySwiper = new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],
  speed: 600,
  direction: 'horizontal',
  scrollbar: {
    el: '.reviews__scrollbar',
    dragClass: 'reviews__scrollbar-drag',
    draggable: true,
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
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
      slidesPerView: 2,
      spaceBetween: 32,
    },
  }
});


jurySwiper.init();
