import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    userInput: '',
    count: 0,
  }

  onUserInput = event => {
    const {userInput, count} = this.state
    this.setState({userInput: event.target.value})
    this.setState({count: count + 1})
  }

  render() {
    const {userInput, count} = this.state
    return (
      <div className="letters-calculator-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="title">
            Enter the phrase
            <input
              type="text"
              placeholder="Enter the phrase"
              className="enter-input"
              value={userInput}
              onChange={this.onUserInput}
            />
          </label>
          <div className="letter-count-container">
            <p className="letter-count">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
