import React from 'react';
import {Helmet} from "react-helmet";
import 'react-linear-gradient-picker/dist/index.css';
import ActionPanel from './components/action-panel';
import Canvas from './components/View/canvas';
import DevPanel from './components/dev-panel';
import SelectElementType from './components/selectElementType';
import ElementZindexPanel from './components/elementZindex';
import Footer from "./components/footer";
import CssInputStylePanel from './components/AllHaveView/cssInputStylePanel';

function XCSSDisplay() {
    return (
      <>
        <Helmet>
          <title>CSS GUI</title>
        </Helmet>
        <Canvas></Canvas>
        <Footer></Footer>
        {/* <div id="tree-init"></div> */}
        <div className="control-panel-right">
          <div className="control-panel-content">
            <DevPanel></DevPanel>
            <ActionPanel></ActionPanel>
            <ElementZindexPanel />
            <CssInputStylePanel />
            <SelectElementType />
          </div>
        </div>
      </>)
  
}

export default XCSSDisplay;
