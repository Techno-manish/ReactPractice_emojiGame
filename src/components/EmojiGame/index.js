/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedList: [], sameId: false}

  onEmojiClick = id => {
    const {clickedList} = this.state
    const isEmojiPresent = clickedList.includes(id)

    if (isEmojiPresent) {
      this.setState({sameId: true})
      return
    }

    this.setState(prevState => ({
      score: prevState.score + 1,
      clickedList: [...prevState.clickedList, id],
    }))
  }

  onReset = () => {
    let {score} = this.state
    const {topScore} = this.state
    if (topScore > score) {
      score = topScore
    }
    this.setState({score: 0, topScore: score, sameId: false, clickedList: []})
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, sameId, clickedList} = this.state
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    const newEmojiList = shuffledEmojisList()
    let isSameId = sameId

    if (clickedList.length === emojisList.length) {
      isSameId = true
    }

    return (
      <>
        <NavBar score={score} topScore={topScore} sameId={isSameId} />
        <div className="bgContainer">
          {isSameId ? (
            <WinOrLoseCard score={score} reset={this.onReset} />
          ) : (
            <ul className="emojiCardContainer">
              {newEmojiList.map(each => (
                <EmojiCard
                  key={each.id}
                  cardDetails={each}
                  clickThisEmoji={this.onEmojiClick}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}
export default EmojiGame
