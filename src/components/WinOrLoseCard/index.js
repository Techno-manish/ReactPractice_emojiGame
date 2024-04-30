// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, reset} = props
  const onReset = () => reset()
  const currentScore = score
  const result = currentScore === 12 ? 'You Won' : 'You Lose'
  const scoreText = currentScore === 12 ? 'Best Score' : 'Score'
  const imgUrl =
    currentScore < 12
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  return (
    <div className="cardContainer">
      <div className="scoreContainer">
        <h1 className="mainHeading">{result}</h1>
        <p className="scoreText">{scoreText}</p>
        <p className="score">{currentScore}/12</p>
        <button type="button" className="button" onClick={onReset}>
          Play Again
        </button>
      </div>
      <img className="winLoseImage" src={imgUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
