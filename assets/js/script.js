const buttonToggleTheme = document.querySelector('#toggle__theme')

const minutesDisplay = document.querySelector('#timer__display__minutes')

const secondsDisplay = document.querySelector('#timer__display__seconds')

const buttonPlay = document.querySelector('#timer__controls__play')
const buttonStop = document.querySelector('#timer__controls__stop')
const buttonPlusFive = document.querySelector('#timer__controls__plus')
const buttonMinusFive = document.querySelector('#timer__controls__minus')

const forestCardUnclicked = document.querySelector('.card__forest--unclicked')
const forestCardClicked = document.querySelector('.card__forest--clicked')
const rainCardUnlicked = document.querySelector('.card__rain--unclicked')
const rainCardClicked = document.querySelector('.card__rain--clicked')
const cafeCardUnclicked = document.querySelector('.card__cafe--unclicked')
const cafeCardClicked = document.querySelector('.card__cafe--clicked')
const fireCardUnclicked = document.querySelector('.card__fire--unclicked')
const firepCardClicked = document.querySelector('.card__fire--clicked')

let timerTimeOut

let minutes = minutesDisplay.textContent
let seconds = secondsDisplay.textContent

function countdown() {
  timerTimeOut = setTimeout(() => {
    let countdownMinutes = Number(minutesDisplay.textContent)
    let countdownSeconds = Number(secondsDisplay.textContent)

    updateTimerDisplay(countdownMinutes, 0)

    // You've subtracted a seconds. Now, if minutes is <= 0, we'll stop the application
    if (countdownMinutes <= 0) {
      reset()
      return
    }

    // Now, if seconds has gotten to zero, you need to subtract 1 from minutes
    if (countdownSeconds <= 0) {
      countdownSeconds = 4
      --countdownMinutes // same as countdownMinutes = countdownMinutes - 1
    }

    updateTimerDisplay(countdownMinutes, String(countdownSeconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  countdown()
})

buttonStop.addEventListener('click', () => {
  reset()
})

function reset() {
  updateTimerDisplay(minutes, seconds)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(min, sec) {
  minutesDisplay.textContent = String(min).padStart(2, '0')
  secondsDisplay.textContent = String(sec).padStart(2, '0')
}
