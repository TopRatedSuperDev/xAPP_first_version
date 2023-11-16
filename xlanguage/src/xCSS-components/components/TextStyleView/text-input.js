import React, { useState } from 'react'
import { TextArea } from '@blueprintjs/core'
import _ from 'lodash'

export class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      internalValue: props.value
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
    const { min, max, onValueChange } = this.props
    const originValue = event.target.value;
    this.setState({
      internalValue: originValue
    })
    onValueChange(originValue)
  }
  // onKeyDown = (event) => {
  //   const { value } = this.props
  //   if (event.key === 'Enter') {
  //     const draftValue = "<br>";
  //     this.setState({
  //       internalValue: value + draftValue
  //     })
  //   }
  // }

  render() {
    
    const { id, disabled, fill } = this.props
    return <TextArea
      id={id}
      disabled={disabled}
      value={this.state.internalValue}
      fill={fill}
      onBlur={this.onBlur}
      // onKeyDown={this.onKeyDown}
      onChange={this.onChange}></TextArea>
  }
}