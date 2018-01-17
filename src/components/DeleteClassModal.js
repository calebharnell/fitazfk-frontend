import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class DeleteClassModal extends Component {

	constructor(props){
	  super(props)
	  }

	render() {
		return (
			<Modal open={true} onClose={this.props.onCancel} basic size='small'>
			  <Header icon='archive' content='Delete All Instances Of This Class' />
			  <Modal.Content>
			    <p>Are you sure you want to delete this class? Once this is done you cannot reverse this action.</p>
			  </Modal.Content>
			  <Modal.Actions>
			    <Button onClick={this.props.onCancel} basic color='red' inverted>
			      <Icon name='remove' /> No
			    </Button>
			    <Button onClick={this.props.onDelete} color='green' inverted>
			      <Icon name='checkmark' /> Yes
			    </Button>
			  </Modal.Actions>
			</Modal>
		)
	}
}


