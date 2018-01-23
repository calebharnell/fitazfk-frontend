import React, { Component } from 'react';
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'

export default class AttendeesModal extends Component {
	constructor(props){
	  super(props)
	}

	render () {
		return (
			<Modal open={true} onClose={this.props.onCancel} >
			  <Modal.Header>{this.props.name} - {this.props.instructor} - {this.props.day}</Modal.Header>
			  <Modal.Content image scrolling>
			    <Modal.Description>
			      <Header>Attendees</Header>
			      <List divided verticalAlign='middle'>
			      	{this.props.attendees.map(attendee => (
			      		<List.Item>
			      		  <List.Content floated='right'>
			      		    <Button onClick={() => this.props.onRemove(this.props.sessionId, attendee._id)}>Remove</Button>
			      		  </List.Content>
			      		  <List.Content>
			      		    {attendee.firstName} {attendee.lastName}
			      		  </List.Content>
			      		</List.Item>
			      		))}
			       </List>
			    </Modal.Description>
			  </Modal.Content>
			  <Modal.Actions>
			    <Button onClick={this.props.onCancel} primary>
			      Done <Icon name='right chevron' />
			    </Button>
			  </Modal.Actions>
			</Modal>
		)
	}
}



