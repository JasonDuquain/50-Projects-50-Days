

let nums = document.querySelectorAll('.num');
let prev = document.querySelector('button:first-of-type');
let next = document.querySelector('button:last-of-type');

next.addEventListener('click', (e) => {
  if (!nums[0].classList.contains('active')) {
    nums[0].classList.add('active');
    nums[1].classList.add('blue')
    prev.classList.add('enabled');
  } else if (nums[0].classList.contains('active') && !nums[1].classList.contains('active')) {
    nums[1].classList.add('active');
    nums[2].classList.add('blue')
    prev.classList.add('enabled');
  } else if (nums[0].classList.contains('active') && nums[1].classList.contains('active') && !nums[2].classList.contains('active')) {
    nums[2].classList.add('active');
    nums[3].classList.add('blue')
    next.classList.remove('enabled');
  }
})

prev.addEventListener('click', (e) => {
  if (nums[0].classList.contains('active') && nums[1].classList.contains('active') && nums[2].classList.contains('active')) {
    nums[2].classList.remove('active');
    nums[3].classList.remove('blue')
    next.classList.remove('enabled');
  } else if (nums[0].classList.contains('active') && nums[1].classList.contains('active')) {
    nums[1].classList.remove('active');
    nums[2].classList.remove('blue')
  } else if (nums[0].classList.contains('active')) {
    nums[0].classList.remove('active');
    nums[1].classList.remove('blue')
    prev.classList.remove('enabled');
    next.classList.add('enabled');
  }
})
