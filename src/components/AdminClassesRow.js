import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'
import CreateClassModal from './CreateClassModal';
import DeleteClassModal from './DeleteClassModal';

class AdminClassesRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	createModalActive: false,
	  	deleteModalOpen: false
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
		this.props.onDelete
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
				  		<Button onClick={this.handleCreateModalOpen}>Edit</Button>
				  		<Button onClick={this.handleDeleteModalOpen}>Delete</Button>
				  	</Table.Cell>
				</Table.Row>
				{this.state.createModalActive && <CreateClassModal
				  onCancel={this.handleCreateModalCancel}
				  onSave={this.handleSave}
				  day={this.props.day}
				  time={this.props.time}
				  name={this.props.name}
				  instructor={this.props.instructor}
				  />}				
				{this.state.deleteModalOpen && <DeleteClassModal
				  onCancel={this.handleDeleteModalCancel}
				  onDelete={this.handleConfirmDelete}
				  />}
			</Table.Body>
		)
	}
}

export default AdminClassesRow;
