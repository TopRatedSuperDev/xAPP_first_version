import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  InputGroup,
  Divider,
  Icon,
  ControlGroup,
  Collapse,
} from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'
import { SketchPicker } from 'react-color';
import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function FontColorPanel({
  disabled,
  color,
  onColorChange,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>FONT COLOR</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        {!disabled && <div className="control-panel-horizontal-layout">
          <FormGroup>
            <Popover2  content={
              <SketchPicker color={color} onChange={onColorChange}></SketchPicker>
            }
              interactionKind="click">
              <ControlGroup className='position-control' fill={true} vertical={false}>
                <div onClick={null} className='color-indicator'>
                  <div className='color-indicator-content' style={{ background: color }} ></div>
                </div>
                <InputGroup id="fontColor-input" value={color} onChange={() => { }} />
              </ControlGroup>
            </Popover2>
          </FormGroup>
        </div>}
      </Collapse>
    </div>
  )
};

const OptimizedFontColorContainer = performanceOptimize(FontColorPanel)(['color', 'disabled']);

function FontColorPanelContainer() {
  const { getTargetStyle, updateTargetStyle, targetId } = useCoreDataStore();

  const color = getTargetStyle("fontColor") || '#000000';
  const onColorChange = value => updateTargetStyle('fontColor', value.hex);
  
  return <>
    <OptimizedFontColorContainer
      disabled={!targetId}
      color={color}
      onColorChange={onColorChange}>
    </OptimizedFontColorContainer>
  </>
}

export default FontColorPanelContainer;
