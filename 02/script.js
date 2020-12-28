

let nums = document.querySelectorAll('.num');
let lines = document.querySelectorAll('line');
let prev = document.querySelector('button:first-of-type');
let next = document.querySelector('button:last-of-type');

/// circle length 62.43
console.log(document.querySelector('circle:first-of-type').getBBox())

next.addEventListener('click', (e) => {
  if (!nums[3].classList.contains('blue')) {
    nums[3].classList.add('blue');
    nums[4].classList.add('blue');
    lines[1].classList.add('blue')
    prev.classList.add('enabled');
  } else if (nums[3].classList.contains('blue') && !nums[6].classList.contains('blue')) {
    nums[6].classList.add('blue');
    nums[7].classList.add('blue');
    lines[3].classList.add('blue')
    prev.classList.add('enabled');
  } else if (nums[6].classList.contains('blue') && !nums[9].classList.contains('blue')) {
    nums[9].classList.add('blue');
    nums[10].classList.add('blue');
    lines[5].classList.add('blue')
    next.classList.remove('enabled');
  }
})

prev.addEventListener('click', (e) => {
  if (nums[9].classList.contains('blue')) {
    nums[9].classList.remove('blue');
    nums[10].classList.remove('blue');
    lines[5].classList.remove('blue')
    next.classList.add('enabled');
  } else if (nums[6].classList.contains('blue')) {
    nums[6].classList.remove('blue');
    nums[7].classList.remove('blue');
    lines[3].classList.remove('blue');
    next.classList.add('enabled');
  } else if (nums[3].classList.contains('blue')) {
    nums[3].classList.remove('blue');
    nums[4].classList.remove('blue');
    lines[1].classList.remove('blue')
    prev.classList.remove('enabled');
    next.classList.add('enabled');
  }
})
