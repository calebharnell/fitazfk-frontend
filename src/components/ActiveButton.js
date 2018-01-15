import React from 'react';
import { Button } from 'semantic-ui-react'

const ActiveButton = ({ active, handleActive }) => (
	<Button onClick={handleActive}>{active ? 'Deactivate' : 'Activate'}</Button>
)

export default ActiveButton;
