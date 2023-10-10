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
}

const newButton = Array.from(buttonElement)

const newField = newButton.map((newButton) => {
  if (newButton.classList.contains('one-noughts')) {
    return 'x';
  } else  if (newButton.classList.contains('one-crosses')){
    return 'o';
  } 
    return '_';
})

const winner = findWinner(newField) 

if (winner === 'o') {
  setTimeout(() => {
	alert('Vyhrál hráč se symbolem kolečko')
  location.reload()
  }, 2000)
  }
  if (winner === 'x') {
    setTimeout(() => {
    alert('Vyhrál hráč se symbolem křížek')
    location.reload()
    }, 2000)
  }
    if (winner === 'tie') {
      setTimeout(() => {
      alert('Hra skončila remízou')
      location.reload()
      }, 2000)
    }

  buttonElement.forEach((button) => {
   button.addEventListener('click', gamerClick )
   })   

const restartButton = (event) => {
  const alert = confirm('Opravdu chceš začít znovu?');
  
  if (alert === true) {
    return 
  } else {
   event.preventDefault()
  }
 
 } 

 document.querySelector('.restart').addEventListener('click', restartButton)


