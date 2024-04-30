// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, sameId} = this.props

    // const scoreClass = sameId ? 'hiddenScore' : 'navScoreContainer'
    return (
      <nav className="navContainer">
        <div className="logoContainer">
          <img
            className="logoImg"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {sameId ? null : (
          <div className="navScoreContainer">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </nav>
    )
  }
}
export default NavBar
