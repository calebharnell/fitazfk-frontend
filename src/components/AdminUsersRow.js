import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { api, setJwt } from '../api/init';
import ActiveButton from './ActiveButton';

class AdminUsersRow extends Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	active: this.props.active
	  }
	}

	handleActive = (event) => {
		let token = localStorage.getItem('token')
    token && setJwt(token)
		event.preventDefault();
		api.post('/user/active', {
        _id: this.props.id,
        active: !this.props.active
      })
      .then((response) => {
        this.setState({
        	active: !this.state.active
        })
      })
      .catch((error) => {
        console.log('An error occured when trying to change active status.', error)
      })
	}

  render() {
		return (
			<Table.Row>
			  <Table.Cell>{this.props.firstName} {this.props.lastName}</Table.Cell>
			  <Table.Cell>{new Date(this.props.signupDate).toLocaleString()}</Table.Cell>
			  <Table.Cell>{this.props.email}</Table.Cell>
			  <Table.Cell><ActiveButton active={this.state.active} handleActive={this.handleActive}/></Table.Cell>
			</Table.Row>
		)
	}
}

export default AdminUsersRow;
