import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {TextInput} from './text-input'

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function TextPanel({
  textValue,
  onTextChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>TEXT</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Text"
              labelFor="text-input"
            >
              <TextInput
                disabled={disabled}
                onValueChange={onTextChange}
                fill={true}
                value={textValue}
                id="text-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedTextPanelContainer = performanceOptimize(TextPanel)(
  ['textValue', 'onTextChange', 'disabled']
);

function TextPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const text = getTargetStyle("text");

  const onTextChange = value => updateTargetStyle('text', value);
  
  return <OptimizedTextPanelContainer
      key={targetId}
      textValue={text}
      onTextChange={onTextChange}
      disabled={!targetId}
    >
  </OptimizedTextPanelContainer>
}

export default TextPanelContainer
