import React from 'react';
import { api, setJwt } from '../api/init';
import { Table } from 'semantic-ui-react'

const SessionRow = ({ id, time, name, instructor }) => {
	
	const handleAttendSession = () => {
		let token = localStorage.getItem('token')
    token && setJwt(token) 
		api.patch(`/sessions/${id}`, {
        _id: id,
        attendee: '5a38b80d71e098a041c3989b'
      })
		  .then((response) => {
		    console.log(response)
		  })
		  .catch((error) => {
		    console.log('An error occured when trying to book into the session.', error)
		  })
	}

	return (
		<Table.Body>
		  <Table.Row>
		    <Table.Cell onClick={handleAttendSession}>{time}</Table.Cell>
		    <Table.Cell>{name}</Table.Cell>
		    <Table.Cell>{instructor}</Table.Cell>
		  </Table.Row>
		</Table.Body>
	)
}

export default SessionRow;

