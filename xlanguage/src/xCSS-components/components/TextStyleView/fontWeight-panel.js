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

function FontWeightPanel({
    fontWeightValue,
    lineHeightValue,
    letterSpacingValue,
    textAlignValue,
    verticalAlignValue,
    onFontWeightChange,
    onLineHeightChange,
    onLetterSpacingChange,
    onTextAlignChange,
    onVerticalAlignChange,
    disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>FONT WEIGHT & OTHER</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Font-Weight"
              labelFor="fontWeight-input"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onFontWeightChange}
                contents={[100, 200, 300, 400, 500, 600, 700, 800, 900, 'bold', 'bolder', 'inherit', 'initial', 'normal', 'lighter', 'revert', 'unset']}
                fill={true}
                value={fontWeightValue}
                id="fontWeight-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Line-Height"
              labelFor="lineHeight-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onLineHeightChange}
                fill={true}
                stepValue={0.1}
                min={0}
                value={lineHeightValue}
                id="lineHeight-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Letter-Spacing"
              labelFor="letterSpacing-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onLetterSpacingChange}
                fill={true}
                stepValue={1}
                min={0}
                value={letterSpacingValue}
                id="letterSpacing-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Text-Align"
              labelFor="textAlign-input"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onTextAlignChange}
                contents={['left', 'center', 'right']}
                fill={true}
                value={textAlignValue}
                id="textAlign-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Vertical-Align"
              labelFor="verticalAlign-input"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onVerticalAlignChange}
                contents={['top', 'middle', 'bottom']}
                fill={true}
                value={verticalAlignValue}
                id="verticalAlign-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedWeightPanelContainer = performanceOptimize(FontWeightPanel)(
  ['fontWeightValue', 'lineHeightValue', 'letterSpacingValue', 'textAlignValue', 'verticalAlignValue', 'disabled']
);

function FontWeightPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const fontWeight = getTargetStyle("fontWeight");
  const lineHeight = getTargetStyle("lineHeight");
  const letterSpacing = getTargetStyle("letterSpacing");
  const textAlign = getTargetStyle("textAlign");
  const verticalAlign = getTargetStyle("verticalAlign");

  const onFontWeightChange = value => updateTargetStyle('fontWeight', value);
  const onLineHeightChange = value => updateTargetStyle('lineHeight', value);
  const onLetterSpacingChange = value => updateTargetStyle('letterSpacing', value);
  const onTextAlignChange = value => updateTargetStyle('textAlign', value);
  const onVerticalAlignChange = value => updateTargetStyle('verticalAlign', value);

  return <OptimizedWeightPanelContainer
      key={targetId}
      fontWeightValue={fontWeight}
      lineHeightValue={lineHeight}
      letterSpacingValue={letterSpacing}
      textAlignValue={textAlign}
      verticalAlignValue={verticalAlign}
      onFontWeightChange={onFontWeightChange}
      onLineHeightChange={onLineHeightChange}
      onLetterSpacingChange={onLetterSpacingChange}
      onTextAlignChange={onTextAlignChange}
      onVerticalAlignChange={onVerticalAlignChange}
      disabled={!targetId}
    >
  </OptimizedWeightPanelContainer>
}

export default FontWeightPanelContainer
