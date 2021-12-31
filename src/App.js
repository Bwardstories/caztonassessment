import React, { useState } from 'react'
import { motion } from 'framer-motion'
// import cardPositions database to set the correct location for each card
import { cardPositions } from './assets/databases'
import './app.css'

const App = () => {
  // the state that keeps track of the order the user has input to rearrange each card
  const [newOrder, setNewOrder] = useState()

  //  initial state for remaining cards to be moved
  const remainingChoicesInitialState = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  //   sets state for all remaining choices
  const [remainingChoices, setRemainingChoices] = useState(
    remainingChoicesInitialState
  )
  // set state for each card, this state is what is used to determine where the card will be moved to by passing it into the animation property of the motion div
  const [firstCard, setFirstCard] = useState()
  const [secondCard, setSecondCard] = useState()
  const [thirdCard, setThirdCard] = useState()
  const [fourthCard, setFourthCard] = useState()
  const [fifthCard, setFifthCard] = useState()
  const [sixthCard, setSixthCard] = useState()
  const [seventhCard, setSeventhCard] = useState()
  const [eighthCard, setEighthCard] = useState()
  const [ninthCard, setNinthCard] = useState()

  // handles input change and sets it to state
  const handleChange = e => {
    // takes the last number typed, changes it from a string to an integer to compare against the remaining choices array
    let lastNumberTyped = parseInt(e.target.value.toString().slice(-1))

    // guard clause to compare remaining choices to last typed number to make sure each number is only picked once.
    if (remainingChoices.includes(lastNumberTyped)) {
      setRemainingChoices(
        remainingChoices.filter(typedNumber => {
          return typedNumber !== lastNumberTyped
        })
      )
    } else if (!remainingChoices.includes(lastNumberTyped)) {
      // sends message that the selected number isn't a valid remaining choice, then lists the remaining choices
      alert(
        `Cannot use the same number twice. ${lastNumberTyped} has already been used. Please Pick one of these remaining numbers ${remainingChoices}`
      )
      //   removes the last digit of the number that is displaying inside of the rendered number input if that number is not a valid remaining selection
      e.target.value = Math.floor(e.target.value / 10)
      return
    }
    setNewOrder(e.target.value.toString(16).split(''))
  }
  //  this function sets all of the Card States
  const setNewCardStates = array => {
    // for loop that loops through the array passed into the function which contains the user's input
    for (let i = 0; i < array.length; i++) {
      //  sets n to the current value at the i index of the passed in array
      let n = parseInt(array[i])

      //  a switch statement that takes each case of the value of n and sets the card's location. If n is 7, it set's seventhCard's state to an object which holds the location the card should move to.
      switch (n) {
        case 1:
          setFirstCard(cardPositions[i])
          break
        case 2:
          setSecondCard(cardPositions[i])
          break
        case 3:
          setThirdCard(cardPositions[i])
          break
        case 4:
          setFourthCard(cardPositions[i])
          break
        case 5:
          setFifthCard(cardPositions[i])
          break
        case 6:
          setSixthCard(cardPositions[i])
          break
        case 7:
          setSeventhCard(cardPositions[i])
          break
        case 8:
          setEighthCard(cardPositions[i])
          break
        case 9:
          setNinthCard(cardPositions[i])
          break
      }
    }
  }

  // function that is called when the button is clicked
  const handleRearrange = () => {
    //   guard clause that throws an alert if each number hasn't been selected yet.
    if (remainingChoices.length > 0) {
      alert(
        `please select each number one time.  you still have ${remainingChoices} to pick from`
      )
      return
    }
    // takes the order the user has input, and sets the state for each card which changes the location
    setNewCardStates(newOrder)
    // resets the input value so the input is blank after the rearrange button is clicked
    document.getElementById('input').value = ''
    //  resets the remaining choices array to its initial state after the button is clicked
    setRemainingChoices(remainingChoicesInitialState)
  }

  return (
    <>
      <div>
        <h4 className="choices-header"> Remaining Choices</h4>
        <div className="remaining-choices">
          {remainingChoices.map(choice => (
            <p className="choice">{choice}</p>
          ))}
        </div>
        <motion.div
          // this is where the state which contains the absolute postioning for each card is passed into for the animation effect
          animate={firstCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card1 card">
          1
        </motion.div>
        <motion.div
          animate={secondCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card2 card">
          2
        </motion.div>
        <motion.div
          animate={thirdCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card3 card">
          3
        </motion.div>
        <motion.div
          animate={fourthCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card4 card">
          4
        </motion.div>
        <motion.div
          animate={fifthCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card5 card">
          5
        </motion.div>
        <motion.div
          animate={sixthCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card6 card">
          6
        </motion.div>
        <motion.div
          animate={seventhCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card7 card">
          7
        </motion.div>
        <motion.div
          animate={eighthCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card8 card">
          8
        </motion.div>
        <motion.div
          animate={ninthCard}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          className="card9 card">
          9
        </motion.div>
      </div>
      <div className="input-container">
        <input
          type="number"
          id="input"
          name="newOrder"
          onChange={e => handleChange(e)}
        />
        <button onClick={handleRearrange}>Rearrange</button>
      </div>
    </>
  )
}

export default App
