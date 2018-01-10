import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { api } from '../api/init';

class AdminClasses extends Component {
  
  state = {
  	sessions: []
  }


  render() {

  const { sessions } = this.state

    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Instructor</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {sessions.map(session => (
          	<Table.Body>
            	<Table.Cell>{session.day}</Table.Cell>
            	<Table.Cell>{session.time}</Table.Cell>
            	<Table.Cell>{session.name}</Table.Cell>
            	<Table.Cell>{session.instructor}</Table.Cell>
            	<Table.Cell>CRUD</Table.Cell>
          	</Table.Body>
            	))}
        </Table>
      </div>
    );
  }

  componentDidMount(){
    api.get('/sessions')
      .then((response) => {
        this.setState({
          sessions: response.data
        })
        console.log(this.state.sessions)
      })
      .catch((error) => {
        console.log('An error occured retrieving sessions.', error)
      })
  }
}


export default AdminClasses;