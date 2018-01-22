import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'
import CreateClassModal from './CreateClassModal';
import DeleteClassModal from './DeleteClassModal';
import AttendeesModal from './AttendeesModal';

class AdminClassesRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	createModalActive: false,
	  	deleteModalOpen: false,
	  	attendeesModalOpen: false
	  }
	}

	handleCreateModalOpen = () => {
	  this.setState(prevState => ({
	    createModalActive: true
	  }))
	}

	handleCreateModalCancel = () => {
	  this.setState(prevState => ({
	    createModalActive: false
	  }))
	}

	handleSave = (formData) => {
		this.handleCreateModalCancel()
		this.props.onUpdate(formData)
	}

	handleDeleteModalOpen = () => {
	  this.setState(prevState => ({
	    deleteModalOpen: true
	  }))
	}

	handleDeleteModalCancel = () => {
	  this.setState(prevState => ({
	    deleteModalOpen: false
	  }))
	}

	handleConfirmDelete = () => {
		this.handleDeleteModalCancel()
		this.props.onDelete(this.props.id)
	}

	handleAttendeesModalOpen = () => {
	  this.setState(prevState => ({
	    attendeesModalOpen: true
	  }))
	}

	handleAttendeesModalCancel = () => {
	  this.setState(prevState => ({
	    attendeesModalOpen: false
	  }))
	}

  render() {

		return (
			<Table.Body>
				<Table.Row>
				  	<Table.Cell>{this.props.day}</Table.Cell>
				  	<Table.Cell>{this.props.time}</Table.Cell>
				  	<Table.Cell>{this.props.name}</Table.Cell>
				  	<Table.Cell>{this.props.instructor}</Table.Cell>
				  	<Table.Cell>
				  		{this.props.attendees ? `${this.props.attendees.length} / ${this.props.maxAttendees}` : '0'}
				  		<Button basic color='blue' floated='right' onClick={this.handleAttendeesModalOpen}>Show Attendees</Button>
				  	</Table.Cell>
				  	<Table.Cell>
					  	<Button.Group>
					  		<Button primary floated='right' onClick={this.handleCreateModalOpen}>Edit</Button>
					  		<Button.Or />
					  		<Button secondary floated='right' onClick={this.handleDeleteModalOpen}>Delete</Button>
				  		</Button.Group>
				  	</Table.Cell>
				</Table.Row>
				{this.state.createModalActive && <CreateClassModal
				  onCancel={this.handleCreateModalCancel}
				  onSave={this.handleSave}
				  day={this.props.day}
				  time={this.props.time}
				  name={this.props.name}
				  floor={this.props.floor}
				  instructor={this.props.instructor}
				  maxAttendees={this.props.maxAttendees}
				  />}				
				{this.state.deleteModalOpen && <DeleteClassModal
				  onCancel={this.handleDeleteModalCancel}
				  onDelete={this.handleConfirmDelete}
				  />}				
				{this.state.attendeesModalOpen && <AttendeesModal
				  onCancel={this.handleAttendeesModalCancel}
				  attendees={this.props.attendees}
				  name={this.props.name}
				  instructor={this.props.instructor}
				  day={this.props.day}
				  onRemove={this.props.onRemove}
				  sessionId={this.props.id}
				  />}
			</Table.Body>
		)
	}

	componentDidMount(){
	}
}

export default AdminClassesRow;
