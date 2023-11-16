import React, {useEffect, useState} from 'react';
import { Button, ButtonGroup, Elevation, Card, FormGroup, InputGroup} from "@blueprintjs/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/authActions';

const RegisterComponent = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);

  const [errors, setErrors] = useState({name:"Required", email:"Required", password:"Required", password2:"Required"});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com+$/;

  useEffect(()=>{
    if(isAuthenticated){
      history.push('/homePage');
    }
  }, [isAuthenticated, history]);

  const validateForm = () => {
    let hasErrors = false;

    if (username.trim() === "") {
      setErrors((errors) => ({ ...errors, name: "Required" }));
      hasErrors = true;
    } else {
      setErrors((errors) => ({ ...errors, name: "" }));
    }

    if (email.trim() === "") {
      setErrors((errors) => ({ ...errors, email: "Required" }));
      hasErrors = true;
    } else if (!emailPattern.test(email)) {
      setErrors((errors) => ({ ...errors, email: "Email is invalid" }));
      hasErrors = true;
    } else {
      setErrors((errors) => ({ ...errors, email: "" }));
    }

    if (password.trim() === "") {
      setErrors((errors) => ({ ...errors, password: "Required" }));
      hasErrors = true;
    } else if (password.length < 6) {
      setErrors((errors) => ({ ...errors, password: "Password must have more than 6 letters" }));
      hasErrors = true;
    } else {
      setErrors((errors) => ({ ...errors, password: "" }));
    }

    if (confirmPassword.trim() === "") {
      setErrors((errors) => ({ ...errors, password2: "Required" }));
      hasErrors = true;
    } else if (confirmPassword !== password) {
      setErrors((errors) => ({ ...errors, password2: "Confirm password is incorrect" }));
      hasErrors = true;
    } else {
      setErrors((errors) => ({ ...errors, password2: "" }));
    }

    return !hasErrors;
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

  const handleSignUp = () => {
    const newUser = {
      name: username,
      email: email,
      password: password,
      password2: confirmPassword
    };

    const isFormValid = validateForm();

    if (isFormValid) {
      dispatch(registerUser(newUser, history));
    }
  };
    return(
        <Card interactive={true} elevation={Elevation.TWO} style={{width:"30%", margin:"auto", marginTop:"100px"}}>
          <h1 style={{textAlign:"center", margin:"30px 0px"}}>Register</h1>
          <FormGroup
          label="User Name"
          labelFor="text-input1"
          labelInfo={errors.name}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input1" 
              placeholder="User Name" 
              style={{marginTop:5}}
              onChange={handleUsernameChange}
              value={username} 
            />
          </FormGroup>
          <FormGroup 
          label="Email"
          labelFor="text-input2"
          labelInfo={errors.email}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input2" 
              placeholder="Email" 
              style={{marginTop:5}}
              onChange={handleEmailChange}
              value={email} 
            />
          </FormGroup>
          <FormGroup
          label="Password"
          labelFor="text-input3"
          labelInfo={errors.password}
          style={{margin:"20px 0px", position:"relative"}}>
            <InputGroup 
              id="text-input3" 
              placeholder="Password" 
              type={showPassword ? "text" : "password"}
              style={{marginTop:5}} 
              onChange={handlePasswordChange}
              value={password}
            />
            <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={toggleShowPassword}
                className="eye-icon"
                style={{position:"absolute", right:"10px", bottom:"8px"}}
              />
          </FormGroup>
          <FormGroup
          label="Confirm Password"
          labelFor="text-input4"
          labelInfo={errors.password2}
          style={{margin:"20px 0px", position:"relative"}}>
            <InputGroup 
              id="text-input4" 
              placeholder="Confirm Password" 
              type={showConfirmPassword ? "text" : "password"}
              style={{marginTop:5}}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword} 
            />
            <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={toggleShowConfirmPassword}
                className="eye-icon"
                style={{position:"absolute", right:"10px", bottom:"8px"}}
              />
          </FormGroup>
          <ButtonGroup fill style={{ marginTop: 40, height: "40px" }}>
            <Link to="/" style={{width:"50%", padding:"0px"}}><Button intent="success" style={{width:"100%", height:"100%"}}>Back</Button></Link>
            <Button intent="primary" style={{width:"50%"}} onClick={handleSignUp}>Sign Up</Button>
          </ButtonGroup>
        </Card>
    )
}

export default RegisterComponent;