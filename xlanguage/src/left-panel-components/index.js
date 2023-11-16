import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from "@blueprintjs/core";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';

export default function LeftPanelButtonGroup({ callback, handleInstallClick, buttonDisplay }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isEnabled = useSelector((state) => state.auth.isActionEnabled);
  const [displayButton, setDisplayButton] = useState(buttonDisplay);
  
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDisplayButton(true);
    };

    if ('serviceWorker' in navigator && window.matchMedia('(display-mode: browser)').matches) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    } else {
      console.log('PWA installation not supported');
    }
  }, []);

  useEffect(() => {
    if(displayButton){
      const installButton = document.getElementById('installation-container');
      installButton.style.display = 'flex';
    }
  }, [displayButton]);
  
  return (
    <>
      <ButtonGroup fill style={{ marginTop: 10, height: "40px" }}>
        <Button intent="success" icon="modal" disabled={!isEnabled} onClick={() => callback(0)}>xCSS GUI</Button>
      </ButtonGroup>
      <ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
        <Button intent="success" icon="modal" disabled={!isEnabled} onClick={() => callback(1)}>xLanguage GUI</Button>
      </ButtonGroup>
      <ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
        <Button intent="success" icon="modal" onClick={() => callback(2)}>User GUI</Button>
      </ButtonGroup>
      <ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
        <Button id="installation-container" style={{ display: "none" }} intent="success" icon="modal" onClick={handleInstallClick}>Download</Button>
      </ButtonGroup>
      <ButtonGroup fill style={{ position: "fixed", bottom: "30px", width: "260px", height: "40px" }}>
        <Button intent="success" icon="modal" onClick={() => dispatch(logoutUser(history))}>Log out</Button>
      </ButtonGroup>
    </>
  );
}
