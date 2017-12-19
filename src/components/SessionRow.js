import React from 'react';
import { Table } from 'semantic-ui-react'

const SessionRow = ({time, name, instructor}) => (
	<Table.Body>
	  <Table.Row>
	    <Table.Cell>{time}</Table.Cell>
	    <Table.Cell>{name}</Table.Cell>
	    <Table.Cell>{instructor}</Table.Cell>
	  </Table.Row>
	</Table.Body>
)


export default SessionRow;

