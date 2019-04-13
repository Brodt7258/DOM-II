// Your code goes here

document.body.querySelector('header div h1.logo-heading')
  .addEventListener('dblclick', () => { alert('You dblclicked the logo'); });

window.addEventListener('scroll', () => { console.log('scroll'); });

document.body.querySelectorAll('img')
  .forEach(e => { e.addEventListener('mouseover', () => { console.log(e.alt); }); });
