import React from 'react';
import SessionRow from './SessionRow';
import { Table } from 'semantic-ui-react'

const SessionsTable = ({ day, sessions, currentUser, handleJoinSession, handleLeaveSession }) => {
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
                                                            session={session}
                                                            key={session._id} 
                                                            currentUser={currentUser}
                                                            handleJoinSession={() => handleJoinSession(session._id)}
                                                            handleLeaveSession={() => handleLeaveSession(session._id)} />)
        }
  	</Table>
  )
}

export default SessionsTable;


