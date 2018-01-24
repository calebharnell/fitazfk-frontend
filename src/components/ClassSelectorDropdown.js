import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'FK - STRENGTH FULL BODY', text: 'FK - STRENGTH FULL BODY', value: 'FK - STRENGTH FULL BODY' },
  { key: 'FK - STRENGTH UPPER BODY', text: 'FK - STRENGTH UPPER BODY', value: 'FK - STRENGTH UPPER BODY' },
  { key: 'FK - STRENGTH LOWER BODY', text: 'FK - STRENGTH LOWER BODY', value: 'FK - STRENGTH LOWER BODY' },
  { key: 'FITYAZ CORE', text: 'FITYAZ CORE', value: 'FITYAZ CORE' },
  { key: 'FK - HIIT SPIN', text: 'FK - HIIT SPIN', value: 'FK - HIIT SPIN' },
  { key: 'FK - HIIT FREESTYLE', text: 'FK - HIIT FREESTYLE', value: 'FK - HIIT FREESTYLE' },
  { key: 'FK - HIIT BOX', text: 'HIIT BOXING', value: 'FK - HIIT BOX' },
  { key: 'BOXING', text: 'BOXING', value: 'BOXING' },
  { key: 'KICKBOXING', text: 'KICKBOXING', value: 'KICKBOXING' },
  { key: 'SUSPENSION TRAINING', text: 'SUSPENSION TRAINING', value: 'SUSPENSION TRAINING' },
  { key: 'YOGA', text: 'YOGA', value: 'YOGA' },
  { key: 'PILATES', text: 'PILATES', value: 'PILATES' },
  { key: 'ROCKFIT', text: 'ROCKFIT', value: 'ROCKFIT' },
  { key: 'BEATS AND BIKES', text: 'BEATS AND BIKES', value: 'BEATS AND BIKES' }
]

export default class ClassSelectorDropdown extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options]
    })
  }

  handleChange = (e, { value }) => this.props.handleCheck(value)

  render() {
    const { currentValues } = this.state

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose Classes'
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}
