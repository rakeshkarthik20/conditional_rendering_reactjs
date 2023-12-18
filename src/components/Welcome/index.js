import React, {Component} from 'react'
import './index.css'

class Subscription extends Component {
  state = {
    isSubscribed: false,
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  renderSubscriptionButton = () => {
    const {isSubscribed} = this.state
    return (
      <button className="btn" type="button" onClick={this.handleButtonClick}>
        {' '}
        {isSubscribed ? 'Subscribed' : 'Subscribe'}{' '}
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderSubscriptionButton()}
      </div>
    )
  }
}

export default Subscription
