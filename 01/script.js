
const container = document.querySelector('.container');
const imgDivs = document.querySelectorAll('.img');
const imgParas = document.querySelector('img p');

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('active') && e.target.classList.contains('img')) {
    imgDivs.forEach((el, idx) => {
      el.classList.remove('active');
      e.target.classList.add('active')
    })
  }
})