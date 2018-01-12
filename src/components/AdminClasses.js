import React, { Component } from 'react';
import { Table, Search, Button, Icon } from 'semantic-ui-react';
import { api, setJwt } from '../api/init';
import CreateClassModal from './CreateClassModal';
import AdminClassesRow from './AdminClassesRow';

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
          
            {sessions.map(session => (<AdminClassesRow
                                        key={session._id}
                                        id={session._id}
                                        day={session.day}
                                        time={session.time}
                                        name={session.name}
                                        instructor={session.instructor} />
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