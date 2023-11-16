import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {NumericInput} from '../numeric-input'
import {SelectPropertyInput} from '../selectProperty-input'

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function JustfyContentPanel({
    justfyContentValue,
    onJustfyContentChange,
    disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>JUSTFY-CONTENT</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Justfy-Content"
              labelFor="justfyContent-input"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onJustfyContentChange}
                contents={['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']}
                fill={true}
                value={justfyContentValue}
                id="justfyContent-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedJustfyContentPanelContainer = performanceOptimize(JustfyContentPanel)(
  ['justfyContentValue', 'disabled']
);

function JustfyContentPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const justfyContent = getTargetStyle("justfyContent");

  const onJustfyContentChange = value => updateTargetStyle('justfyContent', value);

  return <OptimizedJustfyContentPanelContainer
      key={targetId}
      justfyContentValue={justfyContent}
      onJustfyContentChange={onJustfyContentChange}
      disabled={!targetId}
    >
  </OptimizedJustfyContentPanelContainer>
}

export default JustfyContentPanelContainer
