import React from 'react';
import SessionRow from './SessionRow';
import { Table } from 'semantic-ui-react'

const SessionsTable = ({ day, sessions, currentUser }) => {
  return (
  	<Table attached striped>
  	    <Table.Header>
  	      <Table.Row>
  	        <Table.HeaderCell width='six'>{day}</Table.HeaderCell>
  	        <Table.HeaderCell width='six'>Class</Table.HeaderCell>
            <Table.HeaderCell width='six'>Instructor</Table.HeaderCell>
  	        <Table.HeaderCell width='six'>Action</Table.HeaderCell>
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
                                                            currentUser={currentUser} />)
        }
  	</Table>
  )
}

export default SessionsTable;


