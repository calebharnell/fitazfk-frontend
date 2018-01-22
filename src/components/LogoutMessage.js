import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

export default class LogoutMessage extends Component {
  
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
          onDismiss={this.handleDismiss}
          header='See you soon'
          content='Enjoy your class. We look forward to seeing you!'
        />
      )
    }

    return (
      <p>
      </p>
    )
  }
}