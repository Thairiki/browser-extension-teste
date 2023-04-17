  console.log('injecting buttons')
  
  setTimeout(() => {
    const divs = document.querySelectorAll('div.css-w94bws')
    
    divs.forEach(e => {
      const btn = document.createElement('button')
      btn.innerHTML = 'Chamar'
      e.appendChild(btn)
    })
  }, 3000)
