const burger = document.querySelector('.burger')
const menuFS = document.querySelector('#menu_fs')
const closeM = document.querySelector('.close')

burger.addEventListener('click', () => {
  menuFS.style.display = 'flex'
})

closeM.addEventListener('click', ()=> {
  menuFS.style.display = 'none'
})
