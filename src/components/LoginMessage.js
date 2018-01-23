import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

export default class LoginMessage extends Component {

	constructor(props){
	  super(props)
	  this.state = {
	    visible: true
	  }
	}

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          color='blue'
          className='login-message'
          onDismiss={this.handleDismiss}
          header={`Hello, ${this.props.currentUser.firstName} ${this.props.currentUser.lastName}!`}
          content={`You are currently logged in as ${this.props.currentUser.email}`}
        />
      )
    }

    return (
      <p>
      </p>
    )
  }
}
