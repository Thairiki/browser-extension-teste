console.log('injecting buttons')
const divs = document.querySelectorAll('div.css-w94bws')

divs.forEach(e => {
  let i = 0
  const btn = document.createElement('button')
  btn.innerHTML = 'Chamar'
  e.appendChild(btn)
  console.log(i)
  i++
})