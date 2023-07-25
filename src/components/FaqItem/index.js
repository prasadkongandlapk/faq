import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickBtn = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {details} = this.props
    const {questionText, answerText} = details

    const buttonIcon = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const answer = isClicked ? answerText : ''
    const alt = isClicked ? 'minus' : 'plus'

    return (
      <li>
        <div className="back">
          <div className="btttt">
            <h1 className="h1">{questionText}</h1>
            <button type="button" onClick={this.onClickBtn}>
              <img className="img" src={buttonIcon} alt={alt} />
            </button>
          </div>
          {isClicked ? <hr /> : ''}
          <p className="avkd">{answer}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
