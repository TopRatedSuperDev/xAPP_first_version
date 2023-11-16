import React from 'react'
import { InputGroup } from '@blueprintjs/core'
import _ from 'lodash'

export class NumericInput extends React.Component {
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
    const { min, max, stepValue, onValueChange } = this.props
    const originValue = event.target.value;
    this.setState({
      internalValue: originValue
    })
    var numValue;
    if(stepValue===1){
      numValue = parseInt(originValue);
    } else {
      numValue = parseFloat(originValue);
    }
    if (isNaN(numValue)) {
      return;
    }
    if (_.isNumber(min) && numValue < min) {
      return onValueChange(min)
    }
    if (_.isNumber(max) && numValue > max) {
      return onValueChange(max)
    }
    onValueChange(numValue)
  }
  onKeyDown = (event) => {
    const { min, max, value, stepValue } = this.props
    if (event.key === 'Enter') {
      const draftValue = event.target.value;
      if(stepValue===1){
        const numValue = parseInt(draftValue);
        if (isNaN(numValue)) {
          return;
        }
  
        if (_.isNumber(min) && numValue < min) {
          return this.setState({
            internalValue: min
          })
        }
  
        if (_.isNumber(max) && numValue > max) {
          return this.setState({
            internalValue: max
          })
        }
  
        this.setState({
          internalValue: numValue
        })
      } else {
        const numValue = parseFloat(draftValue);
        if (isNaN(numValue)) {
          return;
        }
  
        if (_.isNumber(min) && numValue < min) {
          return this.setState({
            internalValue: min
          })
        }
  
        if (_.isNumber(max) && numValue > max) {
          return this.setState({
            internalValue: max
          })
        }
  
        this.setState({
          internalValue: numValue
        })
      }
        
      
    }

    if (event.key === 'ArrowUp') {
      // if (event.shiftKey) {
      //   plusValue = 10;
      // }
      const draftValue = Number(value) + stepValue;
      const finalValue = _.isNumber(max) && draftValue > max ? max : draftValue;
      if(stepValue===1){
        this.props.onValueChange(finalValue)
        this.setState({
          internalValue: finalValue
        })  
      } else if(stepValue===0.1) {
        this.props.onValueChange(finalValue.toFixed(1))
        this.setState({
          internalValue: finalValue.toFixed(1)
        })
      } else if(stepValue===0.01) {
        this.props.onValueChange(finalValue.toFixed(2))
        this.setState({
          internalValue: finalValue.toFixed(2)
        })  
      }

      event.preventDefault()
      return
    }

    if (event.key === 'ArrowDown') {
      // if (event.shiftKey) {
      //   minusValue = 10;
      // }
      const draftValue = Number(value) - stepValue;
      const finalValue = _.isNumber(min) && draftValue < min ? min : draftValue;

      if(stepValue===1){
        this.props.onValueChange(finalValue)
        this.setState({
          internalValue: finalValue
        })  
      } else if(stepValue===0.1) {
        this.props.onValueChange(finalValue.toFixed(1))
        this.setState({
          internalValue: finalValue.toFixed(1)
        })
      } else if(stepValue===0.01) {
        this.props.onValueChange(finalValue.toFixed(2))
        this.setState({
          internalValue: finalValue.toFixed(2)
        })  
      }

      event.preventDefault()
      return
    }
  }
  render() {
    const { id, disabled, fill } = this.props
    return <InputGroup
      id={id}
      disabled={disabled}
      value={this.state.internalValue}
      fill={fill}
      onBlur={this.onBlur}
      onKeyDown={this.onKeyDown}
      onChange={this.onChange}></InputGroup>
  }
}