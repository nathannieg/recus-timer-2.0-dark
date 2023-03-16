// IMPORTS
import Timer from './timer.js'
import Sounds from './sounds.js'
import Events from './events.js'
import {
  buttonToggleTheme,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestCardUnclicked,
  forestCardClicked,
  rainCardUnlicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  firepCardClicked
} from './elements.js'

// IMPORTING VARIABLES WITH OBJECT DESTRUCTURING
// import { elements } from './elements.js'
/* const {
  buttonToggleTheme,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestCardUnclicked,
  forestCardClicked,
  rainCardUnlicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  firepCardClicked
} = elements */

// FACTORIES IMPORT
const timer = Timer({ minutesDisplay, secondsDisplay })

const sound = Sounds()
// using: sound.ELEMENT.play()

// Executing Events so they will happen when clicks happens
Events({ timer })