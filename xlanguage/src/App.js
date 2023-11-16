import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import MainDiv from './mainDiv';

function App() {
  return (
    <Provider store={store} >
        <div className="App">
          <MainDiv />
        </div>
    </Provider>
  )
}

export default App;
