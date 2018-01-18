import React from 'react';
import SessionRow from './SessionRow';
import { Table } from 'semantic-ui-react'

const SessionsTable = ({ day, sessions, currentUser }) => {
  return (
  	<Table attached striped>
  	    <Table.Header>
  	      <Table.Row>
  	        <Table.HeaderCell width='four'>{day}</Table.HeaderCell>
  	        <Table.HeaderCell width='four'>Class</Table.HeaderCell>
            <Table.HeaderCell width='four'>Instructor</Table.HeaderCell>
            <Table.HeaderCell width='four'>Class Size</Table.HeaderCell>
  	        <Table.HeaderCell width='four'>Action</Table.HeaderCell>
  	      </Table.Row>
  	    </Table.Header>
  	    {
          sessions.map(session => session.day === day && <SessionRow 
                                                            key={session._id} 
                                                            id={session._id} 
                                                            time={session.time} 
                                                            name={session.name} 
                                                            instructor={session.instructor}
                                                            attendees={session.attendees}
                                                            maxAttendees={session.maxAttendees}
                                                            currentUser={currentUser} />)
        }
  	</Table>
  )
}

export default SessionsTable;


