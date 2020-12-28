'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
let weHaveAWinner = false

const scoreContent = string =>
  (document.querySelector('.score').textContent = string)
const highscoreContent = string =>
  (document.querySelector('.highscore').textContent = string)
const message = string =>
  (document.querySelector('.message').textContent = string)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (weHaveAWinner) {
    message(`🎉 Press "Again!" to start over!`)
    return
  } else {
    // When there is no input
    if (!guess) {
      message('⛔ No number!')

      // When guess is incorrect
    } else if (guess !== secretNumber) {
      if (score > 1) {
        message(`${guess < secretNumber ? '📉 Too low!' : '📈 Too high!'}`)
        score--
      } else {
        message('💥 You lost the game!')
        score = 0
      }

      // When guess is correct, and player wins
    } else if (guess === secretNumber && score > 0) {
      message('🎉 Correct Number!')
      if (highscore < score) {
        highscore = score
      }
      document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347'
      document.querySelector('.number').style.width = '30rem'
      document.querySelector('.number').textContent = guess
      weHaveAWinner = true
    }
    scoreContent(score)
    highscoreContent(highscore)
  }
})

document.querySelector('.again').addEventListener('click', function () {
  scoreContent(20)
  message('Start guessing...')
  document.querySelector('.guess').value = ''
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.getElementsByTagName('body')[0].style.backgroundColor = '#222'
  score = 20
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  weHaveAWinner = false
})
