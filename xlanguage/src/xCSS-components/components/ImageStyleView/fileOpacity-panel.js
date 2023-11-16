import React from 'react';
import { useState } from 'react'
import {
  FormGroup,
  Divider,
  InputGroup,
  Icon,
  Collapse,
  ControlGroup,
} from '@blueprintjs/core'

import { Popover2 } from '@blueprintjs/popover2'
import { SketchPicker } from 'react-color';

import {NumericInput} from '../numeric-input'

import { useCoreDataStore } from '../../store/core'
import { performanceOptimize } from '../performance-optimize-wrap'

function FileOpacityPanel({
  fileOpacityValue,
  imageBlurValue,
  imageBrightnessValue,
  imageContrastValue,
  imageGrayscaleValue,
  imageHueRotateValue,
  imageInvertValue,
  imageSaturateValue,
  imageSepiaValue,
  imageDropShadowLeftValue,
  imageDropShadowRightValue,
  imageDropShadowTopDownValue,
  color,
  onImageBrightnessChange,
  onImageBlurChange,
  onfileOpacityChange,
  onImageContrastChange,
  onImageGrayscaleChange,
  onImageHueRotateChange,
  onImageInvertChange,
  onImageSaturateChange,
  onImageSepiaChange,
  onImageDropShadowLeftChange,
  onImageDropShadowRightChange,
  onImageDropShadowTopDownChange,
  onColorChange,
  disabled = true,
}) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="control-panel-group">
      {isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-up" onClick={() => setIsOpen(false)}></Icon>}
      {!isOpen && <Icon className='control-panel-group-title-collapse-icon' icon="chevron-down" onClick={() => setIsOpen(true)}></Icon>}
      <strong  onClick={() => setIsOpen(!isOpen)} className='control-panel-title'>Image Filter Functions</strong>
      <Divider></Divider>
      <Collapse isOpen={isOpen}>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Opacity"
              labelFor="imageOpacity-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onfileOpacityChange}
                fill={true}
                stepValue={0.01}
                min={0}
                max={1}
                value={fileOpacityValue}
                id="imageOpacity-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Blur"
              labelFor="imageBlur-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageBlurChange}
                fill={true}
                stepValue={1}
                min={0}
                value={imageBlurValue}
                id="imageBlur-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Brightness"
              labelFor="imageBrightness-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageBrightnessChange}
                fill={true}
                stepValue={0.1}
                min={0}
                value={imageBrightnessValue}
                id="imageBrightness-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Contrast"
              labelFor="imageContrast-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageContrastChange}
                fill={true}
                stepValue={0.1}
                min={0}
                value={imageContrastValue}
                id="imageContrast-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Grayscale"
              labelFor="imageGrayscale-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageGrayscaleChange}
                fill={true}
                stepValue={1}
                min={0}
                max={1}
                value={imageGrayscaleValue}
                id="imageGrayscale-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="hue-rotate"
              labelFor="imageHueRotate-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageHueRotateChange}
                fill={true}
                stepValue={1}
                min={0}
                value={imageHueRotateValue}
                id="imageHueRotate-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Invert"
              labelFor="imageInvert-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageInvertChange}
                fill={true}
                stepValue={1}
                min={0}
                max={1}
                value={imageInvertValue}
                id="imageInvert-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="saturate"
              labelFor="imageSaturate-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageSaturateChange}
                fill={true}
                stepValue={0.1}
                min={0}
                value={imageSaturateValue}
                id="imageSaturate-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"46%"}}>
            <FormGroup
              label="Sepia"
              labelFor="imageSepia-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageSepiaChange}
                fill={true}
                stepValue={0.1}
                min={0}
                value={imageSepiaValue}
                id="imageSepia-input"
              />
            </FormGroup>
          </div>
        </div>
        <Divider></Divider>
        <h4 style={{textAlign:"center", width:"100%", marginTop:"20px", marginBottom:"20px"}}>Drop-Shadow</h4>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Drop-Shadow Color"
              labelFor="imageDropShadowColor-input"
            >
              <Popover2  content={
                <SketchPicker color={color} onChange={onColorChange}></SketchPicker>
              }
                interactionKind="click">
                <ControlGroup className='position-control' fill={true} vertical={false}>
                  <div onClick={null} className='color-indicator'>
                    <div className='color-indicator-content' style={{ background: color }} ></div>
                  </div>
                  <InputGroup id="imageDropShadowColor-input" value={color} onChange={() => { }} />
                </ControlGroup>
              </Popover2>
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Left"
              labelFor="imageDropShadowLeft-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageDropShadowLeftChange}
                fill={true}
                stepValue={1}
                min={0}
                value={imageDropShadowLeftValue}
                id="imageDropShadowLeft-input"
              />
            </FormGroup>
          </div>
          <div className="control-panel-horizontal-layout-item">
            <FormGroup
              label="Right"
              labelFor="imageDropShadowRight-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageDropShadowRightChange}
                fill={true}
                stepValue={1}
                min={0}
                value={imageDropShadowRightValue}
                id="imageDropShadowRight-input"
              />
            </FormGroup>
          </div>
        </div>
        <div className="control-panel-horizontal-layout">
          <div className="control-panel-horizontal-layout-item" style={{width:"46%"}}>
            <FormGroup
              label="Top-Down"
              labelFor="imageDropShadowTopDown-input"
            >
              <NumericInput
                disabled={disabled}
                onValueChange={onImageDropShadowTopDownChange}
                fill={true}
                stepValue={1}
                value={imageDropShadowTopDownValue}
                id="imageDropShadowTopDown-input"
              />
            </FormGroup>
          </div>
        </div>
    </Collapse>
    </div>
  )
}

const OptimizedFileOpacityPanelContainer = performanceOptimize(FileOpacityPanel)(
  ['fileOpacityValue', 'imageBlurValue', 'imageBrightnessValue', 'imageContrastValue', 'imageGrayscaleValue', 'imageHueRotateValue', 'imageInvertValue', 'imageSaturateValue', 'imageSepiaValue', 'imageDropShadowLeftValue', 'imageDropShadowRightValue', 'imageDropShadowTopDownValue', 'color', 'disabled']
);

function FileOpacityPanelContainer() {
  const dataState = useCoreDataStore();
  const { getTargetStyle, updateTargetStyle, targetId } = dataState;

  const fileOpacity = getTargetStyle("fileOpacity");
  const imageBlur = getTargetStyle("blur");
  const imageBrightness = getTargetStyle("brightness");
  const imageContrast = getTargetStyle("contrast");
  const imageGrayscale = getTargetStyle("grayscale");
  const imageHueRotate = getTargetStyle("hueRotate");
  const imageInvert = getTargetStyle("invert");
  const imageSaturate = getTargetStyle("saturate");
  const imageSepia = getTargetStyle("sepia");
  const imageDropShadowLeft = getTargetStyle("dropShadowLeft");
  const imageDropShadowRight = getTargetStyle("dropShadowRight");
  const imageDropShadowTopDown = getTargetStyle("dropShadowTopDown");
  const color = getTargetStyle("dropShadowColor") || '#000000';


  const onfileOpacityChange = value => updateTargetStyle('fileOpacity', value);
  const onImageBlurChange = value => updateTargetStyle('blur', value);
  const onImageBrightnessChange = value => updateTargetStyle('brightness', value);
  const onImageContrastChange = value => updateTargetStyle('contrast', value);
  const onImageGrayscaleChange = value => updateTargetStyle('grayscale', value);
  const onImageHueRotateChange = value => updateTargetStyle('hueRotate', value);
  const onImageInvertChange = value => updateTargetStyle('invert', value);
  const onImageSaturateChange = value => updateTargetStyle('saturate', value);
  const onImageSepiaChange = value => updateTargetStyle('sepia', value);
  const onImageDropShadowLeftChange = value => updateTargetStyle('dropShadowLeft', value);
  const onImageDropShadowRightChange = value => updateTargetStyle('dropShadowRight', value);
  const onImageDropShadowTopDownChange = value => updateTargetStyle('dropShadowTopDown', value);
  const onColorChange = value => updateTargetStyle('dropShadowColor', value.hex);

  return <OptimizedFileOpacityPanelContainer
      key={targetId}
      fileOpacityValue={fileOpacity}
      imageBlurValue={imageBlur}
      imageBrightnessValue={imageBrightness}
      imageContrastValue={imageContrast}
      imageGrayscaleValue={imageGrayscale}
      imageHueRotateValue={imageHueRotate}
      imageInvertValue={imageInvert}
      imageSaturateValue={imageSaturate}
      imageSepiaValue={imageSepia}
      imageDropShadowLeftValue={imageDropShadowLeft}
      imageDropShadowRightValue={imageDropShadowRight}
      imageDropShadowTopDownValue={imageDropShadowTopDown}
      color={color}
      onImageBlurChange={onImageBlurChange}
      onfileOpacityChange={onfileOpacityChange}
      onImageBrightnessChange={onImageBrightnessChange}
      onImageContrastChange={onImageContrastChange}
      onImageGrayscaleChange={onImageGrayscaleChange}
      onImageHueRotateChange={onImageHueRotateChange}
      onImageInvertChange={onImageInvertChange}
      onImageSaturateChange={onImageSaturateChange}
      onImageSepiaChange={onImageSepiaChange}
      onImageDropShadowLeftChange={onImageDropShadowLeftChange}
      onImageDropShadowRightChange={onImageDropShadowRightChange}
      onImageDropShadowTopDownChange={onImageDropShadowTopDownChange}
      onColorChange={onColorChange}
     disabled={!targetId}
    >
  </OptimizedFileOpacityPanelContainer>
}

export default FileOpacityPanelContainer
