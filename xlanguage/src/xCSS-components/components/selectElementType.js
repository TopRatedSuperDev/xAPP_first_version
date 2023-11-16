import React from 'react';

import SizePanel from './size-panel';
import PositionPanel from './position-panel';
import BoxShadowPanel from './box-shadow-panel';
import BackgroundPanel from './background-panel';
import BorderPanel from './border-panel';
import TransformPanel from './transform-panel';

import TextStyleBox from './TextStyleView';
import ImageStyleBox from './ImageStyleView';

import MarginPanel from './AllHaveView/marginPanel';
import PaddingPanel from './AllHaveView/paddingPanel';

import {useCoreDataStore} from '../store/core';
import JustfyContentPanel from './AllHaveView/justfyContent';
import AlignItemPanel from './AllHaveView/alignItem';
import DisplayPanel from './AllHaveView/display';

export default function SelectElementType() {
    const dataState = useCoreDataStore();
    const { rightPanelStatus } = dataState;
    
    if (rightPanelStatus == "div") {
        return <>
            <h2>Div Style Box</h2>
            <SizePanel />
            <BackgroundPanel />
            <MarginPanel />
            <PaddingPanel />
            <JustfyContentPanel />
            <AlignItemPanel />
            <DisplayPanel />
            <BoxShadowPanel></BoxShadowPanel>
            <PositionPanel></PositionPanel>
            <TransformPanel ></TransformPanel>
            <BorderPanel></BorderPanel>
        </>
    } else if (rightPanelStatus == "text") {
        return <>
            <TextStyleBox />
            <SizePanel />
            <BackgroundPanel />
            <MarginPanel />
            <PaddingPanel />
            <JustfyContentPanel />
            <AlignItemPanel />
            <DisplayPanel />
            <BoxShadowPanel></BoxShadowPanel>
            <PositionPanel></PositionPanel>
            <TransformPanel ></TransformPanel>
            <BorderPanel></BorderPanel>
        </>
    } else {
        return <>
            <ImageStyleBox />
            <SizePanel />
            <BackgroundPanel />
            <MarginPanel />
            <PaddingPanel />
            <JustfyContentPanel />
            <AlignItemPanel />
            <DisplayPanel />
            <BoxShadowPanel></BoxShadowPanel>
            <PositionPanel></PositionPanel>
            <TransformPanel ></TransformPanel>
            <BorderPanel></BorderPanel>
        </>
    }
  
}