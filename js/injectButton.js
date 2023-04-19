setTimeout(() => {
  console.log("Ready!")

  const target = document.querySelector('#root > .css-1svsvwq > .css-1ylu0bo > .css-10fdisw > .css-7jfwpc > .css-9o6z15 > .css-j7qwjs').querySelectorAll('.css-1p0w3oq')[1]
  const items = document.querySelectorAll('div.css-50kdbq')

  console.log(target)
  console.log(document.contains(items[0]))
    
  if (document.contains(items[0])) {
    console.log('injecting buttons')
    items.forEach(item => {
      const nome = item.querySelector('span.css-11zrb1w')
      const localBotao = item.querySelector('div.css-w94bws')
      const btn = document.createElement('button')
      btn.innerText = 'Chamar'
      btn.addEventListener('click', () => {
        alert(nome.innerText)
      })
      localBotao.appendChild(btn)
    })
  }
}, 500)
