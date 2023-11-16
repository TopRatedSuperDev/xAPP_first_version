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
import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function FileUploadPanel({
  disabled,
  imageName,
  onImageSrcChange,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>FILE UPLOAD</strong>
      <Divider></Divider>
      {!disabled && <div className="control-panel-horizontal-layout">
      <Collapse isOpen={isOpen}>
        <FormGroup
          label="File Upload"
          labelFor="file-input"
        >
        <InputGroup type='file' id="file-input" style={{padding:"10px", minHeight:"55px"}} onChange={(e) => { onImageSrcChange(e) }} />
        </FormGroup>        
      </Collapse>
      </div>}
    </div>
  )
};

const OptimizedFileUploadContainer = performanceOptimize(FileUploadPanel)(['imageName', 'onImageSrcChange', 'disabled']);

function FileUploadPanelContainer() {
  const { getTargetStyle, updateTargetStyle, targetId } = useCoreDataStore();
  const onImageSrcChange = e => {
    if (e.target.files[0]){
    updateTargetStyle('imageSrc', URL.createObjectURL(e.target.files[0]));
    updateTargetStyle('imageName', e.target.files[0].name)}};
  const imageName = getTargetStyle("imageName") || '';
  
  return <>
    <OptimizedFileUploadContainer
      disabled={!targetId}
      imageName={imageName}
      onImageSrcChange={onImageSrcChange}>
    </OptimizedFileUploadContainer>
  </>
}

export default FileUploadPanelContainer;
