import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, setCurrentError } from '../actions/authActions';

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(isAuthenticated){
      history.push('/homePage');
    }
  }, [isAuthenticated, history]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    
    const newUser = {
      name: username,
      email: email,
      password: password,
      password2: confirmPassword
    };
    
    if((password === confirmPassword) && (password !== "") && (username !== "") && (email !== "") ) {
      dispatch(registerUser(newUser, history));
    } else {
      dispatch(setCurrentError("Please confirm your informations!"));
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="sign-forms" onSubmit={handleOnSubmit}>
        <h1 className="sign-head">Create Account</h1>
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
        <span className="auth-spans">Use your email for registration</span>
        <input
          className="auth-inputs"
          type="name"
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
          value={password}
          onChange={handlePasswordChange}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={toggleShowPassword}
          className="eye-icon"
          style={{position:"absolute", right:"10px", bottom:"23px", cursor:"pointer"}}
        /></div>
        <div style={{position:"relative", width:"100%"}}>
          <input
          className="auth-inputs"
          type={showConfirmPassword ? "text" : "password"}
          name="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <FontAwesomeIcon
          icon={showConfirmPassword ? faEyeSlash : faEye}
          onClick={toggleShowConfirmPassword}
          className="eye-icon"
          style={{position:"absolute", right:"10px", bottom:"23px", cursor:"pointer"}}
        /></div>
        <button className="auth-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
