(function () {
  'use strict';

  // Клики на кнопке-бургее
  let menuBtnContainer = document.querySelector('.burger');
  let menuBtn = document.querySelector('.burger-button');
  let menu = document.querySelector('.burger-menu');

  menuBtnContainer.addEventListener('click', function () {
    if (menuBtn.classList.contains('burger-button--active')) {
      menuBtn.classList.remove('burger-button--active');
      menu.classList.remove('burger-menu--active');
    } else {
      menuBtn.classList.add('burger-button--active');
      menu.classList.add('burger-menu--active');
    }
  });

  // Слайдер для работ
  const leftBtn = document.querySelector('.slider__toggle--left');
  const rightBtn = document.querySelector('.slider__toggle--right');
  const image = document.querySelector('.slider__image');
  const imageText = document.querySelector('.slider__text');
  let currentSlide = 0;

  const imgSources = ['Slider-item1.png', 'banner.jpg', 'banner1.jpg'];
  const imgTexts = ['Растяжка на ул. Ленина', 'Афиша на ул. Свердлова', 'Баннер на ТК "Аура"'];
  
  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide == -1) currentSlide = imgSources.length - 1;
    else if (currentSlide == imgSources.length) currentSlide = 0;
    image.src = `images/${imgSources[currentSlide]}`;
    imageText.textContent = imgTexts[currentSlide];
  }
  leftBtn.addEventListener('click', () => {
    changeSlide(-1);
  })
  rightBtn.addEventListener('click', () => {
    changeSlide(1);
  })

  // Слайдер для отзывов
  const leftArrow = document.querySelector('.comment__toggle--left');
  const rightArrow = document.querySelector('.comment__toggle--right');
  const items = document.querySelectorAll('.comment');

  let currentItem = 0;

  function changeItems(direction) {
    items[currentItem].classList.remove('comment--shown');
    currentItem += direction;
    if (currentItem == -1) currentItem = items.length - 1;
    else if (currentItem == items.length) currentItem = 0;
    items[currentItem].classList.add('comment--shown');
  }

  leftArrow.addEventListener('click', () => {
    changeItems(-1);
  })
  rightArrow.addEventListener('click', () => {
    changeItems(1);
  })
})();