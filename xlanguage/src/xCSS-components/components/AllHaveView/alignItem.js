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

function AlignItemPanel({
    alignItemValue,
    onAlignItemChange,
    disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>ALIGN-ITEM</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"100%"}}>
            <FormGroup
              label="Align-Item"
              labelFor="alignItemInput"
            >
              <SelectPropertyInput
                disabled={disabled}
                onValueChange={onAlignItemChange}
                contents={['flex-start', 'flex-end', 'self-start', 'self-end', 'baseline', 'stretch', 'start', 'center', 'end', 'revert', 'normal', 'inherit', 'initial', 'unset']}
                fill={true}
                value={alignItemValue}
                id="alignItemInput"
              />
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

const OptimizedAlignItemPanelContainer = performanceOptimize(AlignItemPanel)(
  ['alignItemValue', 'disabled']
);

function AlignItemPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const alignItem = getTargetStyle("alignItem");

  const onAlignItemChange = value => updateTargetStyle('alignItem', value);

  return <OptimizedAlignItemPanelContainer
      key={targetId}
      alignItemValue={alignItem}
      onAlignItemChange={onAlignItemChange}
      disabled={!targetId}
    >
  </OptimizedAlignItemPanelContainer>
}

export default AlignItemPanelContainer
