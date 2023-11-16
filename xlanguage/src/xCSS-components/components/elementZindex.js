import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {NumericInput} from './numeric-input'

import { useCoreDataStore } from '../store/core'
import { performanceOptimize } from './performance-optimize-wrap'

function ElementZindexPanel({
  elementZindexValue,
  onElementZindexChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>ELEMENT Z-INDEX</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout" style={{display:"block"}}>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Element-Z-Index"
              labelFor="Element-Z-Index-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onElementZindexChange}
                fill={true}
                stepValue={1}
                min={0}
                value={elementZindexValue}
                id="Element-Z-Index-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedElementZindexPanelContainer = performanceOptimize(ElementZindexPanel)(
  ['elementZindexValue', 'disabled']
);

function ElementZindexPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const elementZindexValue = getTargetStyle("zIndex");

  const onElementZindexChange = value => updateTargetStyle('zIndex', value);

  return <OptimizedElementZindexPanelContainer
      key={targetId}
      elementZindexValue={elementZindexValue}
      onElementZindexChange={onElementZindexChange}
      disabled={!targetId}
    >
  </OptimizedElementZindexPanelContainer>
}

export default ElementZindexPanelContainer
