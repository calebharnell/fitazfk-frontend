import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { api } from '../api/init';
import CreateClassModal from './CreateClassModal';
import AdminClassesRow from './AdminClassesRow';

class AdminClasses extends Component {

  state = {
  	sessions: [],
    createModalActive: false
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

  handleCreate = (formData) => {
    this.handleCreateModalCancel()
    api.post('/sessions', {
      name: formData.name,
      instructor: formData.instructor,
      day: formData.day,
      time: formData.time,
      floor: formData.floor
    })
    .then(() => {
      this.fetchClasses()
    })
    .catch((error) => {
      console.log('An error occured when trying to create class.', error)
    })
    console.log(formData)
  }

  handleUpdate = (classId, formData) => {
    api.patch('/sessions', {
      _id: classId,
      name: formData.name,
      instructor: formData.instructor,
      day: formData.day,
      time: formData.time,
      floor: formData.floor
    })
    .then(() => {
      this.fetchClasses()
    })
    .catch((error) => {
      console.log('An error occured when trying to create class.', error)
    })
  }

  fetchClasses() {
    api.get('/sessions')
      .then((response) => {
        this.setState({
          sessions: response.data
        })
      })
      .catch((error) => {
        console.log('An error occured retrieving sessions.', error)
      })
  }

  render() {

  const { sessions } = this.state

    return (
      <div>
        <Table celled compact definition>

          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <Button onClick={this.handleCreateModalOpen} floated='left'>
                  Create New Class
                </Button>
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
                                        instructor={session.instructor} 
                                        onUpdate={(formData) => this.handleUpdate(session._id, formData)} />
            ))}
        </Table>

        {this.state.createModalActive && <CreateClassModal
          onCancel={this.handleCreateModalCancel}
          onSave={this.handleCreate}
          />}

      </div>
    );
  }

  componentDidMount(){
    this.fetchClasses()
  }
}


export default AdminClasses;
