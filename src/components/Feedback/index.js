// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isButtonClicked: true,
  }

  thankyouButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {isButtonClicked} = this.state
    let renderButton
    if (isButtonClicked) {
      renderButton = (
        <div>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id} className="image-container">
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="image"
                  onClick={this.thankyouButton}
                />
                <p>{eachItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      renderButton = (
        <div>
          <div className="love-image">
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
          </div>
          <h1 className="heading">Thank you</h1>
          <p>
            we will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="card-container">{renderButton}</div>
      </div>
    )
  }
}

export default Feedback
