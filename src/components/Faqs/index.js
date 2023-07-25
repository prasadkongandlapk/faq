import {Component} from 'react'

import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isShowed: false}

  render() {
    const {faqsList} = this.props
    const {isShowed} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="bgggg">Faqs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                details={each}
                key={each.id}
                onIsShowed={this.onIsShowed}
                isShowed={isShowed}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
