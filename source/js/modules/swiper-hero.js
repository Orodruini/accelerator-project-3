import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const jurySwiper = new Swiper('.program__slider', {
  modules: [Pagination],
  speed: 600,
  loop: true,
  direction: 'horizontal',
  pagination: {
    type: 'bullets',
    clickable: true,
    el: '.program__slider-pagination',
    bulletClass: 'program__slider-button-pagination',
    bulletActiveClass: 'program__slider-button-pagination--active',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      simulateTouch: false,
    },
    1366: {
      slidesPerView: 1,
      simulateTouch: false,
    },
  }
});

jurySwiper.init();
