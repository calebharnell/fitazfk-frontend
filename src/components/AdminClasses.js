import React, { Component } from 'react';
import { Table, Button, Dimmer, Loader } from 'semantic-ui-react';
import { api } from '../api/init';
import CreateClassModal from './CreateClassModal';
import AdminClassesRow from './AdminClassesRow';

class AdminClasses extends Component {

  state = {
    isLoading: false,
  	sessions: [],
    createModalActive: false
  }

  changeLoading = () => {
    this.setState(prevState => ({
      isLoading: !this.state.isLoading
    }))
  }

  handleCreateModalOpen = () => {
    this.setState({
      createModalActive: true
    })
  }

  handleCreateModalCancel = () => {
    this.setState({
      createModalActive: false
    })
  }

  handleCreate = (formData) => {
    this.handleCreateModalCancel()
    api.post('/sessions', {
      name: formData.name,
      instructor: formData.instructor,
      day: formData.day,
      time: formData.time,
      floor: formData.floor,
      maxAttendees: formData.maxAttendees
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
    console.log(formData)
    api.patch('/sessions', {
      _id: classId,
      name: formData.name,
      instructor: formData.instructor,
      day: formData.day,
      time: formData.time,
      floor: formData.floor,
      maxAttendees: formData.maxAttendees
    })
    .then(() => {
      this.fetchClasses()
    })
    .catch((error) => {
      console.log('An error occured when trying to create class.', error)
    })
  }

  handleDelete = (classId) => {
    api.delete(`/sessions/${classId}`, {
    })
    .then(() => {
      this.fetchClasses()
    })
    .catch((error) => {
      console.log('An error occured when trying to delete class.', error)
    })
  }

  fetchClasses() {
    this.changeLoading()
    api.get('/sessions')
      .then((response) => {
        this.setState({
          sessions: response.data
        })
        this.changeLoading()
      })
      .catch((error) => {
        console.log('An error occured retrieving sessions.', error)
      })
  }

  handleLeaveClass = (classId, attendeeId) => {
    console.log(classId, attendeeId)
    api.patch(`/admin/sessions/remove`, {
        _id: classId,
        attendeeId: attendeeId
      })
      .then((response) => {
        this.fetchClasses()
      })
      .catch((error) => {
        console.log('An error occured when trying to leave the session.', error)
      })
  }

  render() {
    const { sessions, isLoading } = this.state
    let tableDisplay;

    if (isLoading) {
      tableDisplay = <Dimmer active>
                       <Loader>Loading</Loader>
                     </Dimmer>
    } else {
      tableDisplay =
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Button basic color='blue' onClick={this.handleCreateModalOpen} floated='left'>
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
            <Table.HeaderCell>Attendees</Table.HeaderCell>
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
                                      floor={session.floor}
                                      attendees={session.attendees}
                                      maxAttendees={session.maxAttendees}
                                      onUpdate={(formData) => this.handleUpdate(session._id, formData)}
                                      onDelete={this.handleDelete}
                                      onRemove={this.handleLeaveClass} />
          ))}
      </Table>
    }

    return (
      <div>
        {
          this.state.createModalActive && <CreateClassModal
                                            onCancel={this.handleCreateModalCancel}
                                            onSave={this.handleCreate}
                                            />
        }
        {tableDisplay}
      </div>
    );
  }

  componentDidMount(){
    this.fetchClasses()
  }
}


export default AdminClasses;
