import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal, List } from 'semantic-ui-react'

export default class ModalExampleScrollingContent extends Component {
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
			      		    <Button onClick={this.props.onRemove}>Remove</Button>
			      		  </List.Content>
			      		  <List.Content>
			      		    {attendee}
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



