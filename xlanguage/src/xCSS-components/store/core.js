import create from 'zustand'
import {persist} from 'zustand/middleware'
import { useUIStore } from './ui'
import { getNewState } from '../element-state-template'
import { useConfigStore } from './config'
import { factory as borderFactory } from './core-helpers/border'
import { factory as boxShadowFactory } from './core-helpers/shadow'
import { factory as transformFactory } from './core-helpers/transform'
import { factory as positionFactory } from './core-helpers/position'
import { factory as animationFactory } from './core-helpers/animation'
import { produce } from 'immer'
import { v4 as uuidv4 } from 'uuid';

var treeIDdata = {children:[]};
var treeDeleteData = [];

export const useCoreDataStore = create(persist((set, get) => ({
  rightPanelStatus: "text",
  
  elementFlag: {},

  elementParentId: {},
  
  elementCollection: {},

  targetId: null,
  setTargetId: (value) => set({ targetId: value }),
  updateSingleElement: (newState, flag) => {
    set(produce((state) => {
      state.elementCollection[state.targetId] = { "css" : newState, "children" : {"id":"world"} };
      state.elementFlag[state.targetId] = flag;
      if((flag == "tree-child-div") || (flag == "div")) {
        state.rightPanelStatus = "div";
      } else if((flag == "tree-child-image") || (flag == "image")) {
        state.rightPanelStatus = "image";
      } else if((flag == "tree-child-text") || (flag == "text")) {
        state.rightPanelStatus = "text";
      }
    }));
  },

  updateTreeElement: (newState, children) => {
    set(produce((state) => {
      state.elementCollection[state.targetId] = { "css" : newState, "children" : children };
      state.elementFlag[state.targetId] = "tree";
      state.rightPanelStatus = "div";
    }));
  },

  // update tree element with their styles
  updateMoreTreeElement: (id, children) => {
    set(produce((state) => {
      state.elementCollection[id]["children"] = children;
    }));
  },

  treeCreateAddElements: (data, treeIdInfo, id, size) =>{
    data.children.filter(item => item.attributes[1].value === 'canvas-item').map((child, index) => {
      const width = size/2;
      const height = size/2;
      const top = size/2 * (index-(index%2))/2;
      const left = size/2 * (index%2);
      const childId = uuidv4();
      set(produce((state) => {
        state.elementCollection[childId] = { "css" : getNewState({ width, height, top, left }), "children" : {"id":"world"} };
        state.elementParentId[childId] = id;
        if(child.title == "DIV") {
          state.elementFlag[childId] = "tree-child-div";
        } else if(child.title == "IMG") {
          state.elementFlag[childId] = "tree-child-image";
        } else {
          state.elementFlag[childId] = "tree-child-text";
        }
      }));
      treeIdInfo.push({title:child.title, id:childId, children:[]});  
      if(child.children.filter(item => item.attributes[1].value === 'canvas-item').length != 0) {
        get().treeCreateAddElements(child, treeIdInfo[index].children, id, width);
      }
    })
  },

// update tree with before state's styles

  treeCreateUpdateElements: (data, treeIdInfo, id, size) =>{
    data.children.filter(item => item.attributes[1].value === 'canvas-item').map((child, index) => {
      const width = size/2;
      const height = size/2;
      const top = size/2 * (index-(index%2))/2;
      const left = size/2 * (index%2);
      if(child.attributes[0].value != null) {
        treeIdInfo.push({title:child.title, id:child.attributes[0].value, children:[]});  
      } else {
        const childId = uuidv4();
        set(produce((state) => {
          state.elementCollection[childId] = { "css" : getNewState({ width, height, top, left }), "children" : {"id":"world"} };
          state.elementParentId[childId] = id;
          if(child.title == "DIV") {
            state.elementFlag[childId] = "tree-child-div";
          } else if(child.title == "IMG") {
            state.elementFlag[childId] = "tree-child-image";
          } else {
            state.elementFlag[childId] = "tree-child-text";
          }
        }));
        treeIdInfo.push({title:child.title, id:childId, children:[]});  
      }
      if(child.children.filter(item => item.attributes[1].value === 'canvas-item').length != 0) {
        get().treeCreateUpdateElements(child, treeIdInfo[index].children, id, width);
      }
    })
  },

  addNewTreeElement: (treeData) => {
    set(() => {

      // get().addNewElement();

      const id = uuidv4();
      get().setTargetId(id)
      // console.log("===id_1===")
      // console.log(treeData)
      get().deleteTreeElement();
      treeIDdata.children = [];
      get().treeCreateAddElements(treeData[0], treeIDdata.children, id, 400);

      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      const width = 600;
      const height = 400;

      const top = canvasPanelHeight / 2 - height / 2;
      const left = canvasPanelWidth / 2 - width / 2;


      var id_children = get().targetId

      // console.log("===id_2===")
      // console.log(get().targetId)
      
      get().updateTreeElement(getNewState({ width, height, left, top }), treeIDdata.children);

      // console.log("==================elementCollection_tree====================")
      // console.log(treeIDdata.children)
      // console.log(id_children)

    })
  },

  // update tree component with styles
  
  updateNewTreeElement: (treeData) => {
    const obj = get().elementFlag;
    const selectedIds = Object.keys(obj).filter(
      key => obj[key] === 'tree'
    );
    if(selectedIds.length == 0){
      get().addNewTreeElement(treeData);
    } else {
      set(() => {
        treeIDdata.children = [];
        get().treeCreateUpdateElements(treeData[0], treeIDdata.children, treeData[0].attributes[0].value, 400);
        get().updateMoreTreeElement(treeData[0].attributes[0].value, treeIDdata.children);
      })
    }
    
  },
//*/
  addNewElement: () => {
    set(() => {
      const id = uuidv4();
      get().setTargetId(id)

      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      const width = 200;
      const height = 200;

      const top = canvasPanelHeight / 2 - height / 2;
      const left = canvasPanelWidth / 2 - width / 2

      get().updateSingleElement(getNewState({ width, height, left, top }), "div");

      // console.log("==================elementCollection_new====================")
      // console.log(get().elementCollection)

      return id;

    })
  },
  
  addNewTextElement: () => {
    set(() => {
      const id = uuidv4();
      get().setTargetId(id)

      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      const width = 200;
      const height = 200;

      const top = canvasPanelHeight / 2 - height / 2;
      const left = canvasPanelWidth / 2 - width / 2

      get().updateSingleElement(getNewState({ width, height, left, top }), "text");

      // console.log("==================elementCollection_new====================")
      // console.log(get().elementCollection)

      return id;

    })
  },

  addNewImageElement: () => {
    set(() => {
      const id = uuidv4();
      get().setTargetId(id)

      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      const width = 200;
      const height = 200;

      const top = canvasPanelHeight / 2 - height / 2;
      const left = canvasPanelWidth / 2 - width / 2

      get().updateSingleElement(getNewState({ width, height, left, top }), "image");

      // console.log("==================elementCollection_new====================")
      // console.log(get().elementCollection)

      return id;

    })
  },

  getTargetStyle(name) {
    const targetId = get().targetId;
    if (!targetId) {
      return '';
    }
    return get().elementCollection[targetId]["css"][name];
  },
  getTargetElementState() {
    const targetId = get().targetId;
    if (!targetId) {
      return;
    }
    return get().elementCollection[targetId]["css"];
  },
  updateTargetStyle(name, value) {
    const targetId = get().targetId;
    if (!targetId) {
      return;
    }
    set(produce((state) => {
      const originElementCollection = state.elementCollection;
      const targetId = get().targetId;
      const originTargetElementState = originElementCollection[targetId]["css"];
      if (useUIStore.getState().applyToAll) {
        Object.keys(originElementCollection).forEach(id => {
          state.elementCollection[id]["css"][name] = value;
          state.elementCollection[id]["css"].top = originTargetElementState.top;
          state.elementCollection[id]["css"].left = originTargetElementState.left;
        })
      } else {
        state.elementCollection[targetId]["css"][name] = value;
      }
    }))
  },
  deleteElement() {
    const targetId = get().targetId;

    set(produce((state) => {
      state.targetId = null;
      delete state.elementCollection[targetId];
      delete state.elementFlag[targetId];
      delete state.elementParentId[targetId];
    }));
  },
  deleteAllElement() {
    set(produce((state) => {
      state.targetId = null;
      state.elementCollection = {}; 
      state.elementFlag = {}; 
      state.elementParentId = {}; 
    }));
  },
  deleteTreeElement() {
    const obj = get().elementFlag;
    const selectedIds = Object.keys(obj).filter(
      key => obj[key] === 'tree-child-div' || obj[key] === 'tree-child-image' || obj[key] === 'tree-child-text' || obj[key] === 'tree'
    );
    selectedIds.map(item => {
      set(produce((state) => {
        // state.targetId = null;
        delete state.elementCollection[item];
        delete state.elementFlag[item];
        delete state.elementParentId[item];
      }));
    })

  },
  copyElement() {
    const targetId = get().targetId;
    const targetElementState = get().elementCollection[targetId]["css"];

    get().setTargetId(uuidv4())
    get().updateSingleElement({
      ...JSON.parse(JSON.stringify(targetElementState)),
      top: targetElementState.top + 20,
      left: targetElementState.left + 20
    }, get().rightPanelStatus);
  },
  generateElements() {
    set(produce((state) => {
      const originElementCollection = state.elementCollection;
      const targetId = get().targetId;
      const cloneElementWhenAddMultipleElements = useUIStore.getState().cloneElementWhenAddMultipleElements;
      const selectedElementState = originElementCollection[targetId]["css"];
      const randomElementCount = useConfigStore.getState().randomElementCount;

      const canvasPanel = document.querySelector('.canvas-panel');
      const canvasPanelStyle = window.getComputedStyle(canvasPanel);
      const canvasPanelWidth = parseInt(canvasPanelStyle.width, 10);
      const canvasPanelHeight = parseInt(canvasPanelStyle.height, 10);

      for (let i = 0; i < randomElementCount; i++) {
        const left = Math.floor(Math.random() * canvasPanelWidth);
        const top = Math.floor(Math.random() * canvasPanelHeight);

        const sourceState = cloneElementWhenAddMultipleElements
          ? selectedElementState
          : getNewState({ left, top });

        state.elementCollection[uuidv4()]["css"] = {
          ...sourceState,
          left,
          top
        }
      }
    }));
  },
  ...borderFactory(set, get),
  ...boxShadowFactory(set, get),
  ...transformFactory(set, get),
  ...positionFactory(set, get),
  ...animationFactory(set, get),
}), {
  name: 'core-storage'
}))
