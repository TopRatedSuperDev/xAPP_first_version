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

function PaddingPanel({
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
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>PADDING CONTROL</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="padding-top"
              labelFor="paddingTop-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onTopChange}
                fill={true}
                stepValue={1}
                min={0}
                value={topValue}
                id="paddingTop-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="padding-right"
              labelFor="paddingRight-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onRightChange}
                fill={true}
                stepValue={1}
                min={0}
                value={rightValue}
                id="paddingRight-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="padding-bottom"
              labelFor="paddingBottom-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onBottomChange}
                fill={true}
                stepValue={1}
                min={0}
                value={bottomValue}
                id="paddingBottom-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="padding-left"
              labelFor="paddingLeft-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onLeftChange}
                fill={true}
                stepValue={1}
                min={0}
                value={leftValue}
                id="paddingLeft-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedPaddingPanelContainer = performanceOptimize(PaddingPanel)(
  ['topValue', 'rightValue', 'bottomValue', 'leftValue', 'disabled']
);

function PaddingPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const top = getTargetStyle("paddingTop");
  const right = getTargetStyle("paddingRight");
  const bottom = getTargetStyle("paddingBottom");
  const left = getTargetStyle("paddingLeft");

  const onTopChange = value => updateTargetStyle('paddingTop', value);
  const onRightChange = value => updateTargetStyle('paddingRight', value);
  const onBottomChange = value => updateTargetStyle('paddingBottom', value);
  const onLeftChange = value => updateTargetStyle('paddingLeft', value);


  return <OptimizedPaddingPanelContainer
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
  </OptimizedPaddingPanelContainer>
}

export default PaddingPanelContainer
