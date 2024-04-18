const features = document.querySelector('.features')
const windowTop90 = window.innerHeight * 0.90



window.addEventListener('scroll', () => {
  const featuresTop = features.getBoundingClientRect().top
  if (windowTop90 >= featuresTop) {
    const content = document.querySelector('.container-feature .content')
    content.style.transform = 'translateY(0)'
    content.style.opacity = '1'
  }
})

const menuCoffee = document.querySelectorAll('.menu-coffee')


window.addEventListener('scroll', () => {
  menuCoffee.forEach(menu => {
    const menuCoffeeTop = menu.getBoundingClientRect().top
    if (windowTop90 >= menuCoffeeTop) {
      menu.style.transform = 'translateY(0)'
      menu.style.opacity = '1'
  }
  });
});

const giftset = document.querySelector('.giftset')

window.addEventListener('scroll', () => {
  const giftsetTop = giftset.getBoundingClientRect().top
  if (windowTop90 >= giftsetTop) {
    const content = document.querySelector('.container-giftset .content')
    content.style.transform = 'translateY(0)'
    content.style.opacity = '1'
  }
})


const comboContent = document.querySelector('.container-combo .content')

window.addEventListener('scroll', () => {
  const comboContentTop = comboContent.getBoundingClientRect().top
  if (windowTop90 >= comboContentTop) {
    comboContent.style.transform = 'translateY(0)'
    comboContent.style.opacity = '1'
  }
})