const coffeeItems = document.querySelectorAll('.coffee');
const buttonRight = document.querySelector('.arrow');
let coffeeTranslate = -600;

buttonRight.addEventListener('click', () => {
  coffeeItems.forEach(coffee => {
    coffee.style.transform = `translateX(${coffeeTranslate}px)`;
  });
  
  // Изменяем координаты смещения в зависимости от текущего положения
  if (coffeeTranslate === -1700) {
    coffeeTranslate = 600;
  } else if (coffeeTranslate === -1200) {
    coffeeTranslate -= 500;
  } else {
    coffeeTranslate -= 600;
  }
});

const pages = document.querySelectorAll('.page');
const giftsetPhoto = document.querySelector('.giftset .photo');

pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    document.querySelectorAll('.page.active').forEach(activePage => {
      activePage.classList.remove('active');
    });
    page.classList.add('active');
    
    // Добавляем/удаляем классы в зависимости от активной страницы
    if (index === 1 && page.classList.contains('active')) {
      giftsetPhoto.classList.add('img-green');
    } else {
      giftsetPhoto.classList.remove('img-green');
    }

    if (index === 2 && page.classList.contains('active')) {
      giftsetPhoto.classList.add('img-blue');
    } else {
      giftsetPhoto.classList.remove('img-blue');
    }
  });
});

const packs = document.querySelectorAll('.pack');
const buttonRight2 = document.querySelector('.container-combo .right');
let translate2 = -368;

function movePacks() {
  packs.forEach(pack => {
    pack.style.transform = `translateX(${translate2}px)`;
  });

  translate2 -= 390;

  if (translate2 === -2318) {
    translate2 = -368;
  }
}

buttonRight2.addEventListener('click', () => {
  movePacks(); // Вызываем функцию сразу после клика на кнопку
  clearInterval(intervalId); // Очищаем предыдущий интервал, если он существует
  intervalId = setInterval(movePacks, 4000); // Устанавливаем новый интервал
});

let intervalId = setInterval(movePacks, 4000);