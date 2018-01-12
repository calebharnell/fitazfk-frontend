import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { api } from '../api/init';
import CreateClassModal from './CreateClassModal';

class AdminClasses extends Component {

  state = {
  	sessions: []
  }


  render() {

  const { sessions } = this.state

    return (
      <div>
        <Table celled compact definition>

          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <CreateClassModal floated='right'/>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Instructor</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {sessions.map(session => (
            <Table.Row>
              	<Table.Cell>{session.day}</Table.Cell>
              	<Table.Cell>{session.time}</Table.Cell>
              	<Table.Cell>{session.name}</Table.Cell>
              	<Table.Cell>{session.instructor}</Table.Cell>
              	<Table.Cell>CRUD</Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
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
