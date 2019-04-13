// Your code goes here

document.body.querySelector('header div h1.logo-heading')
  .addEventListener('dblclick', () => { alert('You dblclicked the logo'); });

window.addEventListener('scroll', () => { console.log('scroll'); });

document.body.querySelectorAll('img')
  .forEach(e => { e.addEventListener('mouseover', () => { console.log(e.alt); }); });

window.addEventListener('load', () => { console.log('Loaded.  Go do stuff.'); });

window.addEventListener('resize', () => console.log('resized window'));

window.addEventListener('keydown', (e) => {
  console.log(e.keyCode === 13 ? 'Go to signup' : `${e.key} was pressed`);
})