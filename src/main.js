import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
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

const commentsSwiper = new Swiper('.comments-swiper', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 120,
  speed: 700,
  autoplay: true,
  navigation: {
    prevEl: '.partner-comment-buttons .prev',
    nextEl: '.partner-comment-buttons .next',
    disabledClass: 'disabled',
  }
})