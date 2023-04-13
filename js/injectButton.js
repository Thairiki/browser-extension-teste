// function injectButton () {
//   document.querySelectorAll('div.css-w94bws')
//   .forEach(e => {
//     const btn = document.createElement('button')
//     btn.innerHTML = 'Chamar'
//     e.appendChild(btn)
//   })
// }

console.log('injecting buttons')
document.querySelectorAll('div.css-w94bws')
  .forEach(e => {
    const btn = document.createElement('button')
    btn.innerHTML = 'Chamar'
    e.appendChild(btn)
  })