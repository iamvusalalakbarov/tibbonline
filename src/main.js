import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './styles/main.scss';

const medicalMarketSwiper = new Swiper('.medical-market-swiper', {
  modules: [Navigation],
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    prevEl: '.medical-market-swiper-button.prev',
    nextEl: '.medical-market-swiper-button.next',
    disabledClass: 'disabled',
  },
});