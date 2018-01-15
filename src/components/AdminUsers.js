import React, { Component } from 'react';
import { Button, Icon, Table, Search } from 'semantic-ui-react'
import { api, setJwt } from '../api/init';
import AdminUsersRow from './AdminUsersRow';

class AdminUsers extends Component {

	state = {
		users: [],
    isLoading: false,
    searchValue: ''
	}

  handleSearchChange = (event) => {
    // Update the state with our search query
    this.setState({
      searchValue: event.target.value
    });
  }

  render() {

  	const { users, isLoading, searchValue } = this.state
    const filteredUsers = users.filter(user => user.lastName.includes(searchValue))

    return (
      <div>
        <Table celled compact definition>

	        <Table.Header fullWidth>
	          <Table.Row>
	            <Table.HeaderCell colSpan='6'>
	              <Button floated='right' icon labelPosition='left' primary size='small'>
	                <Icon name='user' /> Add User
	              </Button>
	              <Search
                  loading={isLoading}
                  onSearchChange={this.handleSearchChange}
                />
	            </Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>

          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
	          {filteredUsers.map(user =>(
                <AdminUsersRow 
                  firstName={user.firstName}
                  lastName={user.lastName}
                  id={user._id}
                  email={user.email}
                  active={user.active} />
	          ))}
	        </Table.Body>

        </Table>
      </div>
    );
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    token && setJwt(token)
    api.get('/users')
      .then((response) => {
        this.setState({
          users: response.data
        })
      })
      .catch((error) => {
        console.log('An error occured retrieving users.', error)
      })
  }

}

export default AdminUsers;
