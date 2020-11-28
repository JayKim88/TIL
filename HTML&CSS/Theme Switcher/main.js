const input = document.querySelector('.theme-switcher input')

input.addEventListener('change', (e)=>{
  console.dir(e)
  if(e.target.checked){
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }
})
// ?????
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event