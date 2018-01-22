import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class ActiveButton extends Component {
	render() {
		let displayButton;
		if (this.props.active) {
			displayButton = <Button secondary onClick={this.props.handleActive}>Deactivate</Button>
		} else {
			displayButton = <Button primary onClick={this.props.handleActive}>Activate</Button>
		}
    return (
    	<div>
				{displayButton}
			</div>
    )
  }
}

export default ActiveButton;
