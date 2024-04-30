// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, clickThisEmoji} = props
  const {id, emojiName, emojiUrl} = cardDetails
  const onEmojiClick = () => clickThisEmoji(id)
  return (
    <li className="emojiContainer">
      <button type="button" className="cardButton" onClick={onEmojiClick}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
