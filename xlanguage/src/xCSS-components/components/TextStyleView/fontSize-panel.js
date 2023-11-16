import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  Icon,
  Collapse,
} from '@blueprintjs/core'
import {NumericInput} from '../numeric-input'
import {FontFamilyInput} from './fontFamily-input'

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function FontSizePanel({
  fontSizeValue,
  fontFamilyValue,
  onFontSizeChange,
  onFontFamilyChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>FONT SIZE & FAMILY</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Font-Size"
              labelFor="fontSize-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onFontSizeChange}
                fill={true}
                stepValue={1}
                min={8}
                value={fontSizeValue}
                id="fontSize-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Font-Family"
              labelFor="fontFamily-input"
            >
              <FontFamilyInput
                disabled={disabled}
                onValueChange={onFontFamilyChange}
                fill={true}
                value={fontFamilyValue}
                id="fontFamily-input"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedSizePanelContainer = performanceOptimize(FontSizePanel)(
  ['fontSizeValue', 'fontFamilyValue', 'disabled']
);

function FontSizePanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const fontSize = getTargetStyle("fontSize");
  const fontFamily = getTargetStyle("fontFamily");

  const onFontSizeChange = value => updateTargetStyle('fontSize', value);
  const onFontFamilyChange = value => updateTargetStyle('fontFamily', value);

  return <OptimizedSizePanelContainer
      key={targetId}
      fontSizeValue={fontSize}
      fontFamilyValue={fontFamily}
      onFontSizeChange={onFontSizeChange}
      onFontFamilyChange={onFontFamilyChange}
      disabled={!targetId}
    >
  </OptimizedSizePanelContainer>
}

export default FontSizePanelContainer
