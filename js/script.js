window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent'),

  // Скрываем контент
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  // Отображаем контент 
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  // Вешаем событие на кнопки, при клике на кнопку, открываем соответствующий таб
  info.addEventListener('click', (e) => {
    let target = e.target; 
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });



});