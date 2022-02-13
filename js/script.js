document.querySelectorAll('.burger').forEach(burger => {
  burger.addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.add('burger-menu_active')
  })
})

document.querySelectorAll('.burger-menu__item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.remove('burger-menu_active')
  })
})

document.querySelector('.burger-menu__cross').addEventListener('click', () => {
  document.querySelector('.burger-menu').classList.remove('burger-menu_active')
})

document.querySelector('.burger-menu__back').addEventListener('click', () => {
  document.querySelector('.burger-menu').classList.remove('burger-menu_active')
})

document.querySelectorAll('.contactslink').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.modal__back').classList.add('modal__back_active')
    document.querySelector('.modal').classList.add('modal_active')
  })
})

document.querySelector('.modal__back').addEventListener('click', () => {
  document.querySelector('.modal__back').classList.remove('modal__back_active')
  document.querySelector('.modal').classList.remove('modal_active')
})

document.querySelector('.modal__cross').addEventListener('click', () => {
  document.querySelector('.modal__back').classList.remove('modal__back_active')
  document.querySelector('.modal').classList.remove('modal_active')
})
