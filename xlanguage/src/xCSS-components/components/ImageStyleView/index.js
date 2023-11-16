import React from 'react';

import FileUploadPanel from './fileUpload-panel';
import FileOpacityPanel from './fileOpacity-panel';

export default function ImageStyleBox(){
    return <>
       <h2>Image Style Box</h2> 
       <FileUploadPanel />
       <FileOpacityPanel />
    </>
}