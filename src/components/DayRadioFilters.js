import React, { Component } from 'react'
import { Checkbox, Grid } from 'semantic-ui-react'


export default class DayRadioFilters extends Component {
  state = {
    checked: false
  }

  handleChange = (e, { value }) => {
    this.props.handleCheck(value)
    this.setState({
      checked: !this.state.checked
    })
  }


  render() {
    return (
      <Grid.Column>
        <Checkbox
          label={this.props.label}
          name='dayRadioFilters'
          value={this.props.value}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </Grid.Column>
    )
  }
}
