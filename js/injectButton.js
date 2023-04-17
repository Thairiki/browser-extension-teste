  console.log('injecting buttons')
  
  setTimeout(() => {
    const items = document.querySelectorAll('div.css-50kdbq')

    items.forEach(item => {
      const nome = item.querySelector('div.css-11zrb1w')
      const localBotao = item.querySelector('div.css-w94bws')
      const btn = document.createElement('button')
      btn.innerHTML = 'Chamar'
      btn.addEventListener('click', () => {
        alert(nome.innerHTML);
      })
      console.log(item)
      localBotao.appendChild(btn)
    })
  }, 3000)
