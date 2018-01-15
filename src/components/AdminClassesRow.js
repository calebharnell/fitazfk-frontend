import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'

class AdminClassesRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	    sessions: this.props.sessions,
	    editable: false
	  }
	}

	handleEditSession = () => {
		this.setState({
			editable: true
		})
	}

  render() {
		return (
			<Table.Body>
				<Table.Row>
				  	<Table.Cell contentEditable={this.state.editable}>{this.props.day}</Table.Cell>
				  	<Table.Cell contentEditable={this.state.editable}>{this.props.time}</Table.Cell>
				  	<Table.Cell contentEditable={this.state.editable}>{this.props.name}</Table.Cell>
				  	<Table.Cell contentEditable={this.state.editable}>{this.props.instructor}</Table.Cell>
				  	<Table.Cell><Button onClick={this.handleEditSession}>Edit</Button></Table.Cell>
				</Table.Row>
			</Table.Body>
		)
	}
}

export default AdminClassesRow;
