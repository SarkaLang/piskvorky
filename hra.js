import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = 'noughts';
const changePlayer = document.querySelector('.image')
const buttonElement = document.querySelectorAll('button')

const gamerClick = (event) => {
  if ( currentPlayer === 'noughts') {
    event.target.classList.add('one--noughts');
    changePlayer.src = 'images/cross.svg'
    event.target.disabled = true;
    currentPlayer = 'crosses';
  } else {
    event.target.classList.add('one--crosses');
    changePlayer.src = 'images/circle.svg'
    event.target.disabled = true;
    currentPlayer = 'noughts';
  }
 


const newField = Array.from(buttonElement).map((newButton) => {
  if (newButton.classList.contains('one--noughts')) {
    return 'o';
    
  } else  if (newButton.classList.contains('one--crosses')){
    return 'x';
  } 
    return '_';
})


const winner = findWinner(newField) 
const alertMessage = (message) => {
  setTimeout(() => {
    alert(message)
    window.location.reload()
  }, 300)
    
}

if (winner === 'o') {
  alertMessage('Vyhrál hráč se symbolem kolečko')
 }
  
  if (winner === 'x') {
    alertMessage('Vyhrál hráč se symbolem křížek')
  }

 if (winner === 'tie') {
   alertMessage('Hra skončila remízou')
  }

    if (currentPlayer === 'crosses') {
      const response = fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board: newField,
        player: 'x', 
      }),
    })
    response 
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const x = data.position.x
      const y = data.position.y
      const index = x + y * 10
      const field = buttonElement[index]
      field.click()
    })
  
}}




  buttonElement.forEach((button) => {
   button.addEventListener('click', gamerClick )
   })   

const restartButton = (event) => {
  const alert = confirm('Opravdu chceš začít znovu?');
  if (alert) {
    return 
  } else {
   event.preventDefault()
  }
 } 

 document.querySelector('.restart').addEventListener('click', restartButton)

 
 






