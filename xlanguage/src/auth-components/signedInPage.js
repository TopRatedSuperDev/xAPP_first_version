import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/authActions';

function SignInForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);

  useEffect(()=>{
    if(isAuthenticated){
      history.push('/homePage');
    }
  }, [isAuthenticated, history]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      name: username,
      email: email,
      password: password
    };

    dispatch(loginUser(newUser));
    
  };

  return (
    <div className="form-container sign-in-container">
      <form className="sign-forms" onSubmit={handleOnSubmit}>
        <h1 className="sign-head">Sign in</h1>
        {/* <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
        <span className="auth-spans">Use your account</span>
        <input
          className="auth-inputs"
          type="username"
          placeholder="UserName"
          autoComplete="on"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="auth-inputs"
          type="email"
          placeholder="Email"
          autoComplete="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <div style={{position:"relative", width:"100%"}}>
          <input
          className="auth-inputs"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={toggleShowPassword}
          className="eye-icon"
          style={{position:"absolute", right:"10px", bottom:"23px", cursor:"pointer"}}
        /></div>
        {/* <a href="#">Forgot your password?</a> */}
        <button className="auth-btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
