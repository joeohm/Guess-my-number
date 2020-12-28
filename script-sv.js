'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
let gameOver = false

const scoreContent = string =>
  (document.querySelector('.score').textContent = string)
const highscoreContent = string =>
  (document.querySelector('.highscore').textContent = string)
const message = string =>
  (document.querySelector('.message').textContent = string)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (gameOver) {
    message(`🎉 Tryck "Igen!" för att börja om!`)
    return
  } else {
    // When there is no input
    if (!guess) {
      message('⛔ Inget nummer!')

      // When guess is incorrect
    } else if (guess !== secretNumber) {
      if (score > 1) {
        message(`${guess < secretNumber ? '📉 För lågt!' : '📈 För högt!'}`)
        score--
      } else {
        message('💥 Du förlorade!')
        score = 0
      }

      // When guess is correct, and player wins
    } else if (guess === secretNumber && score > 0) {
      message('🎉 Rätt gissat!')
      if (highscore < score) {
        highscore = score
      }
      document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347'
      document.querySelector('.number').style.width = '30rem'
      document.querySelector('.number').textContent = guess
      gameOver = true
    }
    scoreContent(score)
    highscoreContent(highscore)
  }
})

document.querySelector('.again').addEventListener('click', function () {
  scoreContent(20)
  message('Börja gissa...')
  document.querySelector('.guess').value = ''
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.getElementsByTagName('body')[0].style.backgroundColor = '#222'
  score = 20
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  gameOver = false
})
