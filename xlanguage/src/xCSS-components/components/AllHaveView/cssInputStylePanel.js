import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {TextInput} from '../TextStyleView/text-input';

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function CssInputStylePanel({
  textValue,
  onTextChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>CSS STYLE INPUT</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="CSS-Style-Input"
              labelFor="CSS-Style-input"
            >
              <TextInput
                disabled={disabled}
                onValueChange={onTextChange}
                fill={true}
                value={textValue}
                id="CSS-Style-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedCssInputStylePanelContainer = performanceOptimize(CssInputStylePanel)(
  ['textValue', 'onTextChange', 'disabled']
);

function CssInputStylePanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const text = getTargetStyle("cssInputStyle");

  const onTextChange = value => updateTargetStyle('cssInputStyle', value);
  
  return <OptimizedCssInputStylePanelContainer
      key={targetId}
      textValue={text}
      onTextChange={onTextChange}
      disabled={!targetId}
    >
  </OptimizedCssInputStylePanelContainer>
}

export default CssInputStylePanelContainer
