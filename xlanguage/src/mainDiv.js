import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactJsAlert from "reactjs-alert";
import AuthComponent from './auth-components/index';
import HomePage from './auth-components/homePage';
import { useSelector } from 'react-redux';

function MainDiv() {
    const [alertState, setAlertState] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [alertType, setAlertType] = useState("");
  
    const errors = useSelector((state)=>state.errors.errorsMessage);
    const errorsCount = useSelector((state)=>state.errors.errorsCnt);
  
    const success = useSelector((state)=>state.success.successMessage);
    const successCnt = useSelector((state)=>state.success.successCnt);

    const [promptEvent, setPromptEvent] = useState(null);
    const [buttonDisplay, setButtonDisplay] = useState(false);

    useEffect(() => {
      const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();
        setPromptEvent(event);
        setButtonDisplay(true);
      };
      
  
      if ('serviceWorker' in navigator && window.matchMedia('(display-mode: browser)').matches) {
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      } else {
        console.log('PWA installation not supported');
      }
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }, []);
  
    const handleInstallClick = (e) => {
      if (promptEvent) {
        e.preventDefault();
        promptEvent.prompt(); // Call the prompt() method directly within the user-triggered event handler
        promptEvent.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User installed the app');
          } else {
            console.log('User dismissed the app installation');
          }
        });
      }
    };
  
    useEffect(()=>{
      if(errors !== ""){
        setAlertType("error");
        setAlertText(errors);
        setAlertState(true);
      }
    }, [errors, errorsCount]);
  
    useEffect(()=>{
      if(success !== ""){
        setAlertType("success");
        setAlertText(success);
        setAlertState(true);
      }
    }, [success, successCnt]);
  
  return (
    <>
    <ReactJsAlert
        type={alertType} // success, warning, error, info
        title={alertText} // title you want to display
        status={alertState} // true or false
        Close={() => setAlertState(false)}
      />
      <Router>
          <Route path="/" component={AuthComponent} exact />
          {/* <Route path="/homePage" component={HomePage} exact /> */}
          <Route path="/homePage" exact render={(props) => <HomePage {...props} handleInstallClick={handleInstallClick} buttonDisplay={buttonDisplay} />} />
      </Router>
    </>
  )
}

export default MainDiv;
