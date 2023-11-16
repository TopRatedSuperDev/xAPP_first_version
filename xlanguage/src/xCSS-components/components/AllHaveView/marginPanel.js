import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {NumericInput} from '../numeric-input'

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function MarginPanel({
  topValue,
  bottomValue,
  rightValue,
  leftValue,
  onRightChange,
  onLeftChange,
  onTopChange,
  onBottomChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>MARGIN CONTROL</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="margin-top"
              labelFor="marginTop-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onTopChange}
                fill={true}
                stepValue={1}
                min={0}
                value={topValue}
                id="marginTop-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="margin-right"
              labelFor="marginRight-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onRightChange}
                fill={true}
                stepValue={1}
                min={0}
                value={rightValue}
                id="marginRight-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="margin-bottom"
              labelFor="marginBottom-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onBottomChange}
                fill={true}
                stepValue={1}
                min={0}
                value={bottomValue}
                id="marginBottom-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="margin-left"
              labelFor="marginLeft-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onLeftChange}
                fill={true}
                stepValue={1}
                min={0}
                value={leftValue}
                id="marginLeft-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedMarginPanelContainer = performanceOptimize(MarginPanel)(
  ['topValue', 'rightValue', 'bottomValue', 'leftValue', 'disabled']
);

function MarginPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const top = getTargetStyle("marginTop");
  const right = getTargetStyle("marginRight");
  const bottom = getTargetStyle("marginBottom");
  const left = getTargetStyle("marginLeft");

  const onTopChange = value => updateTargetStyle('marginTop', value);
  const onRightChange = value => updateTargetStyle('marginRight', value);
  const onBottomChange = value => updateTargetStyle('marginBottom', value);
  const onLeftChange = value => updateTargetStyle('marginLeft', value);


  return <OptimizedMarginPanelContainer
      key={targetId}
      topValue={top}
      rightValue={right}
      bottomValue={bottom}
      leftValue={left}
      onTopChange={onTopChange}
      onRightChange={onRightChange}
      onBottomChange={onBottomChange}
      onLeftChange={onLeftChange}
      disabled={!targetId}
    >
  </OptimizedMarginPanelContainer>
}

export default MarginPanelContainer
