
const target = document.querySelector('div.css-1p0w3oq')
const items = document.querySelectorAll('div.css-50kdbq')

const observer = new MutationObserver(mutations => {
  if (document.contains(items)) {
    console.log("Ready!")
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

    // observer.disconnect()
  }
  })
  
  observer.observe(target, { attributes: false, childList: true, characterData: false, subtree: true })
