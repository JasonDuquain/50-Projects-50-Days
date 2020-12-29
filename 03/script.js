
let lines = document.querySelector('.lines');
let x = document.querySelector('.x');
let container = document.querySelector('.container');
let hamburger = document.querySelector('.hamburger');
let cells = document.querySelectorAll('.cell')

lines.addEventListener('click', (e) => {
  container.classList.add('rotate');
  hamburger.classList.add('rotate');
  cells.forEach(cell => cell.classList.add('translate'))
})

x.addEventListener('click', (e) => {
  container.classList.remove('rotate');
  hamburger.classList.remove('rotate');
  cells.forEach(cell => cell.classList.remove('translate'))
})