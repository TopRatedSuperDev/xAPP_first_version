import React, { useState } from 'react'
import { InputGroup } from '@blueprintjs/core'
import _ from 'lodash'

export class SelectPropertyInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      internalValue: props.value,
    }
  }
  static getDerivedStateFromProps(props, state) {
    const {forceSync, value} = props
    if (forceSync) {
      return {
        internalValue: value
      }
    }
    return null;
  }
  onBlur = () => {
    this.setState({
      internalValue: this.props.value
    })
  }
  onChange = (event) => {
    const { onValueChange } = this.props
    const originValue = event.target.value;
    this.setState({
      internalValue: originValue
    })

    onValueChange(originValue)
  }

  render() {
    const { id, contents, disabled, fill } = this.props
    return <select
      id={id}
      className="property-select"
      disabled={disabled}
      value={this.state.internalValue}
      onBlur={this.onBlur}
      onChange={this.onChange}
    >
      {contents.map(item=>(<option key={item} value={item}>{item}</option>))}
    </select>
  }
}