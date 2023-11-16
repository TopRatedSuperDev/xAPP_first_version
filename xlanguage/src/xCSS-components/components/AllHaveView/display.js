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

function DisplayPanel({
    displayValue,
    onDisplayChange,
    disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>DISPLAY</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Display"
              labelFor="displayInput"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onDisplayChange}
                contents={['block', 'inline', 'inline-block', 'none', 'flex', 'grid']}
                fill={true}
                value={displayValue}
                id="displayInput"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedDisplayPanelContainer = performanceOptimize(DisplayPanel)(
  ['displayValue', 'disabled']
);

function DisplayPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const display = getTargetStyle("display");

  const onDisplayChange = value => updateTargetStyle('display', value);

  return <OptimizedDisplayPanelContainer
      key={targetId}
      displayValue={display}
      onDisplayChange={onDisplayChange}
      disabled={!targetId}
    >
  </OptimizedDisplayPanelContainer>
}

export default DisplayPanelContainer
