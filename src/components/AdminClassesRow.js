import React, { Component } from 'react';
import { api, setJwt } from '../api/init';
import { Table, Button } from 'semantic-ui-react'
import CreateClassModal from './CreateClassModal';

class AdminClassesRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	createModalActive: false
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
			</Table.Body>
		)
	}
}

export default AdminClassesRow;
