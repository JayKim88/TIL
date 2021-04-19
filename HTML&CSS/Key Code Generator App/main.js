const displayKey = document.querySelector('.key h2')
const displayKeyCode = document.querySelector('.keyCode h2')
const keyCodeDiv = document.querySelector('.keyCode')

window.addEventListener('keydown',(e)=>{
  // console.log(e);
  displayKey.textContent = e.key;
})