import React from 'react'
import {
  createStyleObj,
  createStyleText
} from "../../utils";

import {useCoreDataStore} from '../../store/core'
import {useUIStore} from '../../store/ui'
import Footer from "../footer";
import AnimationPanel from "../animation-panel";

function Canvas() {

  const UIState = useUIStore();
  const dataState = useCoreDataStore();
  const {
    dragStartPoint,
    setDragStartPoint,
    dragBegin,
    setDragBegin,
    dragStartElementPoint,
    setDragStartElementPoint,
    showAnimationPanel,
  } = UIState;
  const { elementFlag, elementCollection, updateSingleElement, updateTreeElement, targetId, setTargetId} = dataState;

  function recordMouseDownPosition(targetId, event) {
    const { clientX, clientY } = event;
    
    const clickedElement = event.target;
    const clickedID = clickedElement.id;
    
    const elementState = elementCollection[clickedID]["css"];
    
    if (clickedID !== '') {
      if (clickedElement === event.currentTarget) {
        setTargetId(clickedID); // Reset targetID if parent div is clicked
      } else {
        setTargetId(clickedID); // Set targetID to the clicked child div ID
      }
    }    
    // setTargetId(targetId);
    setDragStartElementPoint([elementState.left, elementState.top])
    setDragStartPoint([clientX, clientY])
    setDragBegin(true)
  }

  function recordMouseUpPosition() {
    setDragBegin(false);
    if(elementFlag[targetId] == "tree") {
      updateTreeElement({
        ...elementCollection[targetId]["css"],
      }, elementCollection[targetId]["children"])
    } else {
      updateSingleElement({
        ...elementCollection[targetId]["css"]
      }, elementFlag[targetId])
    }
  }

  function mouseMoveOnCanvas(event) {
    const { clientX, clientY } = event;
    if (!dragBegin) {
      return;
    }
    const [dragStartPointX, dragStartPointY] = dragStartPoint;
    const [dragStartElementPointX, dragStartElementPointY] = dragStartElementPoint;
    const startYPoint = window.getComputedStyle(document.getElementById(targetId).parentNode).paddingTop;
    const startXPoint = window.getComputedStyle(document.getElementById(targetId).parentNode).paddingLeft;
    if((((dragStartElementPointX + (clientX - dragStartPointX)) >= parseInt(startXPoint, 10)) && ((dragStartElementPointX + (clientX - dragStartPointX)) <= (document.getElementById(targetId).parentNode.offsetWidth - document.getElementById(targetId).offsetWidth - parseInt(window.getComputedStyle(document.getElementById(targetId)).marginLeft, 10) - parseInt(window.getComputedStyle(document.getElementById(targetId)).marginRight, 10) - parseInt(window.getComputedStyle(document.getElementById(targetId).parentNode).paddingRight, 10))))
    && (((dragStartElementPointY + (clientY - dragStartPointY)) >= parseInt(startYPoint, 10)) && ((dragStartElementPointY + (clientY - dragStartPointY)) <= (document.getElementById(targetId).parentNode.offsetHeight - document.getElementById(targetId).offsetHeight - parseInt(window.getComputedStyle(document.getElementById(targetId)).marginTop, 10) - parseInt(window.getComputedStyle(document.getElementById(targetId)).marginBottom, 10) - parseInt(window.getComputedStyle(document.getElementById(targetId).parentNode).paddingBottom, 10))))) {
      if(elementFlag[targetId] == "tree") {
        updateTreeElement({
          ...elementCollection[targetId]["css"],
          left: dragStartElementPointX + (clientX - dragStartPointX),
          top: dragStartElementPointY + (clientY - dragStartPointY),
        }, elementCollection[targetId]["children"])
    
      } else {
        updateSingleElement({
          ...elementCollection[targetId]["css"],
          left: dragStartElementPointX + (clientX - dragStartPointX),
          top: dragStartElementPointY + (clientY - dragStartPointY),
        }, elementFlag[targetId])
      }
    }
  }

const tree = {
  name: "Root",
  children: [
    {
      name: "Child 1",
      children: [

        {
          name: "Child 2",
          children: [],
        },

      ],
    },

  ],
};

/*


//*/

function createDivTree(tree) {
  if (tree.length == 0) {
    return null;
  }
  return tree.map((child, key) => {
    if(elementCollection[child.id] == null){
      return null;
    }
    const elementState = elementCollection[child.id]["css"];
    const stylePairs = elementState.cssInputStyle.replace(/\n/g, '').replace(/\s/g, '').split(';');
    const cssArray = stylePairs.map(pair => pair.split(':'));

    if(child.title == "DIV"){
      return <div 
        id={child.id}
        className='canvas-item'
        style={{...createStyleObj(elementState), ...Object.fromEntries(cssArray), display:elementState.display}}
        // onMouseMove={mouseMoveOnCanvas}
        key={key}
        onMouseDown={recordMouseDownPosition.bind(this, child.id)}
        onMouseUp={recordMouseUpPosition}
        // onClick={() => setTargetId(child.id)}
      >
        {createDivTree(child.children)}
      </div>
    } else if(child.title == "IMG") {
      return <img
        id={child.id}
        className='canvas-item'
        style={{...createStyleObj(elementState), ...Object.fromEntries(cssArray), display:elementState.display, filter:"blur("+elementState.blur+"px) brightness("+elementState.brightness+") contrast("+elementState.contrast+") grayscale("+elementState.grayscale+") hue-rotate("+elementState.hueRotate+"deg) invert("+elementState.invert+") saturate("+elementState.saturate+") sepia("+elementState.sepia+") drop-shadow("+elementState.dropShadowLeft+"px "+elementState.dropShadowTopDown+"px "+elementState.dropShadowRight+"px "+elementState.dropShadowColor+")" , opacity:elementState.fileOpacity}}
        onMouseDown={recordMouseDownPosition.bind(this, child.id)}
        onMouseUp={recordMouseUpPosition}
        // onClick={() => setTargetId(child.id)}
        key={key}
        src={elementState.imageSrc}
        alt='upload the source file'
        >
        {/* {id == targetId && <div className="selected-element-cursor">
        </div>} */}
        {/* <img src={elementState.imageSrc} style={{width:"100%", height:"100%", filter:"blur("+elementState.blur+"px) brightness("+elementState.brightness+") contrast("+elementState.contrast+") grayscale("+elementState.grayscale+") hue-rotate("+elementState.hueRotate+"deg) invert("+elementState.invert+") saturate("+elementState.saturate+") sepia("+elementState.sepia+") drop-shadow("+elementState.dropShadowLeft+"px "+elementState.dropShadowTopDown+"px "+elementState.dropShadowRight+"px "+elementState.dropShadowColor+")" , opacity:elementState.fileOpacity}} alt='upload the source file' />  */}
      </img>
    } else {
      return <p
        id={child.id}
        className='canvas-item'
        style={{...createStyleObj(elementState), ...Object.fromEntries(cssArray), display:"inline-block", justifyContent:elementState.justifyContent, backgroundColor:elementState.backgroundColor, width: "fit-content", height: "fit-content", zIndex:elementState.zIndex, position:"absolute", top:elementState.top, right:elementState.right, left:elementState.left, bottom:elementState.bottom, fontSize:elementState.fontSize, fontFamily:elementState.fontFamily, fontWeight:elementState.fontWeight,lineHeight:elementState.lineHeight,textAlign:elementState.textAlign, verticalAlign:elementState.verticalAlign, letterSpacing:elementState.letterSpacing, color:elementState.fontColor}}
        onMouseDown={recordMouseDownPosition.bind(this, child.id)}
        onMouseUp={recordMouseUpPosition}
        // onClick={() => setTargetId(child.id)}
        key={key}
        >
        {elementState.text.split('\n').map((item, key) => {
          return <React.Fragment key={key}>{item}<br/></React.Fragment>
        })}
      </p>
    }
  });
  
  // return (
  //   <div style={createStyleObj(elementState)}
  //        onMouseDown={recordMouseDownPosition.bind(this, id)}
  //        onMouseUp={recordMouseUpPosition}
  //        onClick={() => setTargetId(id)}
  //        key={id}

  //   >
  //     {tree.name}
  //     {tree.children.map((child) => (
  //       <div key={id}
  //        onMouseDown={recordMouseDownPosition.bind(this, id)}
  //        onMouseUp={recordMouseUpPosition}
  //        onClick={() => setTargetId(id)}
  //       >{createDivTree(child,elementState,id)}</div>
  //     ))}
  //   </div>
  // );
}

const obj = {
  "3cc3c98a-bb03-4723-8f02-e590ecde659c": {
    "name": "John Doe",
    "age": 30,
    "children": {
      "street": "123 Main Street",
      "city": "Anytown",
      "state": "CA"
    }
  },
  "c78e7803-803c-4403-860d-37add018dd61": {
    "name": "Jane Doe",
    "age": 25,
    "children": {
      "street": "456 Elm Street",
      "city": "Newtown",
      "state": "NY"
    }
  }
};

function toJSON(obj) {
  if (typeof obj === "object") {
    if (obj === null) {
      return null;
    } else if (obj instanceof Array) {
      return obj.map(toJSON);
    } else {
      const objProps = Object.keys(obj).reduce((acc, prop) => {
        acc[prop] = toJSON(obj[prop]);
        return acc;
      }, {});
      return JSON.stringify(objProps);
    }
  } else {
    return obj;
  }
}

  return <div className="canvas-panel" onMouseMove={mouseMoveOnCanvas} >{Object.keys(elementCollection).map(id => {
    const elementState = elementCollection[id]["css"];
    const elementType = elementFlag[id];
    // console.log("==========elementState=========")
    // console.log("elementCollection", elementCollection)
    const stylePairs = elementState.cssInputStyle.replace(/\n/g, '').replace(/\s/g, '').split(';');
    const cssArray = stylePairs.map(pair => pair.split(':'));
    // console.log({...createStyleObj(elementState), display:elementState.display, ...Object.fromEntries(cssArray)})

    const json = toJSON(elementCollection);

    // console.log(json); 

    // return createDivTree( tree, elementState, id);
    if(elementType == "tree") {
      const elementChild = elementCollection[id]["children"];
      return <div 
        id={id}
        className='canvas-item canvas-tree'
        style={{...createStyleObj(elementState), display:elementState.display, ...Object.fromEntries(cssArray)}}
        // onMouseMove={mouseMoveOnCanvas}
        onMouseDown={recordMouseDownPosition.bind(this, id)}
        onMouseUp={recordMouseUpPosition}
        // onClick={() => setTargetId(id)}
        key={id}>
      {createDivTree(elementChild)}
    </div>
    } else if (elementType == "div") {
      return <div
        id={id}
        className='canvas-item'
        style={{...createStyleObj(elementState), display:elementState.display, ...Object.fromEntries(cssArray)}}
        onMouseDown={recordMouseDownPosition.bind(this, id)}
        onMouseUp={recordMouseUpPosition}
        onClick={() => setTargetId(id)}
        key={id}
        >
        {/* {id == targetId && <div className="selected-element-cursor">
        </div>} */}
      </div>
    } else if (elementType == "text") {
      return <p
        id={id}
        className='canvas-item'
        style={{...createStyleObj(elementState), ...Object.fromEntries(cssArray), display:"inline-block", justifyContent:elementState.justifyContent, backgroundColor:elementState.backgroundColor, width: "fit-content", height: "fit-content", zIndex:elementState.zIndex, position:"absolute", top:elementState.top, right:elementState.right, left:elementState.left, bottom:elementState.bottom, fontSize:elementState.fontSize, fontFamily:elementState.fontFamily, fontWeight:elementState.fontWeight,lineHeight:elementState.lineHeight,textAlign:elementState.textAlign, verticalAlign:elementState.verticalAlign, letterSpacing:elementState.letterSpacing, color:elementState.fontColor}}
        onMouseDown={recordMouseDownPosition.bind(this, id)}
        onMouseUp={recordMouseUpPosition}
        onClick={() => setTargetId(id)}
        key={id}
        >
        {/* {id == targetId && <div className="selected-element-cursor">
        </div>} */}
        {elementState.text.split('\n').map((item, key) => {
          return <React.Fragment key={key}>{item}<br/></React.Fragment>
        })}
        </p>
    } else if (elementType == "image")  {
      return <img
        id={id}
        className='canvas-item'
        onMouseDown={recordMouseDownPosition.bind(this, id)}
        onMouseUp={recordMouseUpPosition}
        onClick={() => setTargetId(id)}
        key={id}
        src={elementState.imageSrc}
        alt='upload the source file'
        style={{...createStyleObj(elementState), ...Object.fromEntries(cssArray), display:elementState.display, filter:"blur("+elementState.blur+"px) brightness("+elementState.brightness+") contrast("+elementState.contrast+") grayscale("+elementState.grayscale+") hue-rotate("+elementState.hueRotate+"deg) invert("+elementState.invert+") saturate("+elementState.saturate+") sepia("+elementState.sepia+") drop-shadow("+elementState.dropShadowLeft+"px "+elementState.dropShadowTopDown+"px "+elementState.dropShadowRight+"px "+elementState.dropShadowColor+")" , opacity:elementState.fileOpacity}}>
        {/* {id == targetId && <div className="selected-element-cursor">
        </div>} */}
        {/* <img src={elementState.imageSrc} style={{width:"100%", height:"100%", filter:"blur("+elementState.blur+"px) brightness("+elementState.brightness+") contrast("+elementState.contrast+") grayscale("+elementState.grayscale+") hue-rotate("+elementState.hueRotate+"deg) invert("+elementState.invert+") saturate("+elementState.saturate+") sepia("+elementState.sepia+") drop-shadow("+elementState.dropShadowLeft+"px "+elementState.dropShadowTopDown+"px "+elementState.dropShadowRight+"px "+elementState.dropShadowColor+")" , opacity:elementState.fileOpacity}} alt='upload the source file' />  */}
      </img>
    }
    
  })}
    {showAnimationPanel && <AnimationPanel />}
    {/* <Footer></Footer> */}
  </div>
}

export default Canvas


