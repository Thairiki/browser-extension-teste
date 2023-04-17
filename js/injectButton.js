  console.log('injecting buttons')
  
  setTimeout(() => {
    const items = document.querySelectorAll('div.css-50kdbq')

    items.forEach(item => {
      const nome = item.querySelector('span.css-11zrb1w')
      const localBotao = item.querySelector('div.css-w94bws')
      const btn = document.createElement('button')
      btn.innerText = 'Chamar'
      console.log(nome)
      btn.addEventListener('click', () => {
        alert(nome.innerText);
      })
      localBotao.appendChild(btn)
    })
  }, 3000)
