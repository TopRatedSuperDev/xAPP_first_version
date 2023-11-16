import React, {useState} from 'react';
import LeftPanelButtonGroup from '../left-panel-components';
import XCSSDisplay from '../xCSS-components';
import XLanguageDisplay from '../xLanguage-components';
import UserDisplay from '../userPanel-components';
import {useHistory} from 'react-router-dom';

import store from '../store';
import { logoutUser, getUserInfo } from "../actions/authActions";

export default function HomePage(props) {
    const [UIstate, setUIstate] = useState(2);

    const history = useHistory();

    // if (localStorage.jwtToken) {
    //   const token = localStorage.jwtToken;
    //   setAuthToken(token);
    //   const decoded = jwt_decode(token);
    //   store.dispatch(setCurrentUser(decoded));
    //   const currentTime = Date.now() / 1000; 
    //   if (decoded.exp < currentTime) {
    //     store.dispatch(logoutUser(history));
    //     window.location.href = "/";
    //   }
    // } else {
    //   store.dispatch(logoutUser(history));
    // }

    if(localStorage.emailToken === undefined){
      store.dispatch(logoutUser(history));
    } else {
      store.dispatch(getUserInfo({email:localStorage.emailToken}));
      const GUIDispalyfun = () => {
        if(UIstate === 0){
            return <XCSSDisplay />;
        } else if(UIstate === 1){
            return <XLanguageDisplay />;
        } else if(UIstate === 2){
            return <UserDisplay />
        }
      }
        return (
          <div className="App">
            <div className="control-panel-left">
              <LeftPanelButtonGroup callback={(val)=>setUIstate(val)} {...props} />
            </div>
            {GUIDispalyfun()}
          </div >)

    }

}