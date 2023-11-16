import { v4 as uuidv4 } from 'uuid';
import {maxOffset, minOffset} from './store/gradient'
const stateTemplate = {
  text: 'Hello World!',
  cssInputStyle: '',
  imageName: '',
  // image filter functions
  imageSrc: '',
  fileOpacity: 1,
  blur: 0,
  brightness:1,
  contrast: 1,  // 0.1
  grayscale: 0, //1,0
  hueRotate:0,  // 1
  invert:0, // 1,0
  saturate:1, // 0.1
  sepia:0, // 0.1
  dropShadowLeft:0,
  dropShadowRight:0,
  dropShadowTopDown:0,
  dropShadowColor:'#000000',
  // font style
  fontSize: 12,
  fontFamily: "Arial",
  fontWeight:"",
  lineHeight:1,
  letterSpacing:1,
  textAlign:'left',
  verticalAlign:'top',
  width: 200,
  height: 200,
  top: 100,
  bottom: 0,
  left: 100,
  right: 0,
  // all elements have
  justfyContent:"center",
  alignItem: 'unset',
  display: 'block',
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  // background color control
  enableGradientBackground: false,
  backgroundColor: '#FFFFFF',
  backgroundGradientAngle: 90,
  backgroundGradientStops: [{
    id: uuidv4(),
    offset: minOffset,
    color: '#ffa500',
    percentage: 0,
    visible: true,
  }, {
    id: uuidv4(),
    offset: maxOffset,
    color: '#87ceeb',
    percentage: 100,
    visible: true,
  }],
  // font color control
  fontColor: '#000000',

  zIndex: 2,

  borderEnabled: true,
  borderAllInOne: true,

  animation: {
    duration: 0.3,
    delay: 0,
    timing: 'ease',
    infinite: false,
    name: '',
    animatedProperties: {
      size: false,
      position: false,
      background: false,
      border: false,
      boxShadow: false,
      translate: false,
      scale: false,
      skew: false
    },
    animationTimeline:[]
  },

  border: {
    top: {
      width: 1,
      style: 'solid',
      color: 'gray'
    },
    bottom: {
      width: 1,
      style: 'solid',
      color: 'gray'
    },
    left: {
      width: 1,
      style: 'solid',
      color: 'gray'
    },
    right: {
      width: 1,
      style: 'solid',
      color: 'gray'
    },
  },

  boxShadow: [{
    enableInset: false,
    offsetX: 5,
    offsetY: 5,
    blurRadius: 20,
    spreadRadius: 0,
    color: 'grey',
    collapsePanel: false,
    enabled: true
  }],

  transform: {
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    translate: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      x: 1,
      y: 1,
      z: 1
    },
    skew: {
      x: 0,
      y: 0,
    },
  }
}

export function getNewState({ height = 200, width = 200, left = 100, top = 100 }) {
  return JSON.parse(JSON.stringify({
    ...stateTemplate,
    width,
    height,
    left,
    top
  }))
}
