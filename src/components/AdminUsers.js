import React, { Component } from 'react';
import { Table, Search, Dimmer, Loader } from 'semantic-ui-react'
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

  changeLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render() {

  	const { users, isLoading, searchValue } = this.state
    const filteredUsers = users.filter(user => user.lastName.includes(searchValue))
    let tableDisplay;

    if (isLoading) {
      tableDisplay = <Dimmer active>
                       <Loader>Loading</Loader>
                     </Dimmer>
    } else {
      tableDisplay = <Table celled compact definition>
                      <Table.Header fullWidth>
                        <Table.Row>
                          <Table.HeaderCell colSpan='6'>
                            <Search
                              loading={isLoading}
                              onSearchChange={this.handleSearchChange}
															placeholder='Search by surname'
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
                              signupDate={user.signupDate}
                              id={user._id}
                              email={user.email}
                              active={user.active} />
                        ))}
                      </Table.Body>
                    </Table>
    }

    return (
      <div>
        {tableDisplay}
      </div>
    );
  }

  componentDidMount(){
    this.changeLoading()
    let token = localStorage.getItem('token')
    token && setJwt(token)
    api.get('/users')
      .then((response) => {
        this.setState({
          users: response.data
        })
        this.changeLoading()
      })
      .catch((error) => {
        console.log('An error occured retrieving users.', error)
      })
  }

}

export default AdminUsers;
