import axios from "axios";
import setAuthToken from "../util/setAuthToken";

import { GET_ERRORS, SET_CURRENT_USER, GET_SUCCESS } from "./types";
import bcrypt from "bcryptjs";
     
async function getCacheData() {
  try {
    const cache = await caches.open('site-dynamic-v1');
    const cacheKeys = await cache.keys();

    for (const cacheKey of cacheKeys) {
      if (cacheKey.url.includes('/auth/getUserInfo')) {
        const cacheResponse = await cache.match(cacheKey);
        const cacheData = await cacheResponse.json();

        return cacheData;
      }
    }
  } catch (error) {
    console.error('Error retrieving cache data:', error);
  }
}

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post("http://localhost:5000/auth/register",userData)
  .then(res => {
    if(res.data.message === 'Email already registered'){
      dispatch(setCurrentError("Email already registered!"));
    }
    else if(res.data.message === 'Registration successful') {
      localStorage.setItem("emailToken", userData.email);
      dispatch(setCurrentSuccess("Register successfully!"));
      dispatch(setCurrentUser({email:userData.email, payValue:0, vipTime:res.data.vipTime}));
      history.push("/homePage");
    }
  })
  .catch(err=> {dispatch(setCurrentError("Register Failed!"))});
}

//Login
export const loginUser = (userData) => dispatch => {
  axios.post("http://localhost:5000/auth/login",userData)
  .then( res => {
      // const token = res.data.token;
      // // Set token to localStorage
      // localStorage.setItem("jwtToken", token);

      // // Set token to Auth header
      // setAuthToken(token);

      // const decoded = jwt_decode(token);
      // // Set current user
      // dispatch(setCurrentUser(decoded));
      localStorage.setItem("emailToken", userData.email);
      dispatch(setCurrentSuccess("Sign in successfully!"));
      dispatch(setCurrentUser({email:userData.email, payValue:res.data.payValue, vipTime:res.data.vipTime}));
   }
  )
  .catch(err=> {
    // console.log(err);
    // dispatch(setCurrentError("Incorrect informations!"));
    async function fetchData() {
      const userCacheData = await getCacheData();
      if((userCacheData.email != null) || (userCacheData.password != null)){
        dispatch(setCurrentError("Incorrect informations!"));
      } else {
        const match = await bcrypt.compare(userData.password, userCacheData.password);
      
        if((userCacheData.email === userData.email) && (match ===true)){
          localStorage.setItem("emailToken", userData.email);
          dispatch(setCurrentSuccess("Sign in successfully!"));
          dispatch(setCurrentUser({email:userCacheData.email, payValue:userCacheData.payValue, vipTime:userCacheData.vipTime}));
        } else {
          dispatch(setCurrentError("Incorrect informations!"));
        }
      }
      
    }
    fetchData();
  })
}

//Login
export const payRecord = (userData) => dispatch => { 
  axios.post("http://localhost:5000/auth/payRecord",userData)
  .then( res => {
    dispatch(setCurrentUser({email:userData.email, payValue:res.data.payValue, vipTime:res.data.vipTime}));
   }
  )
  .catch(err=> {
    console.log(err);
    dispatch(setCurrentError("Connection Failed!"));
  })
}

var chargeID = "";

// coinbase payment integration
export const coinbasePay = (userData) => (dispatch) => { 
  axios.post("http://localhost:5000/coinbase/checkout",userData)
  .then( res => {
    console.log(res.data.charge);
    // chargeID = res.data.charge.id;
    const newTab = window.open(res.data.charge.hosted_url, '_blank');
    newTab.focus();
    
   }
  )
  .catch(err=> {
    console.log(err);
    dispatch(setCurrentError("Connection Failed!"));
  })
}

// export const webHooksResult = (userData) => (dispatch) => { 
//     axios.post("http://localhost:5000/coinbase/webhooks", userData)
//     .then(response => {
//         console.log(response.data); // Access and handle the result data received from the webhooks endpoint
//         // Dispatch actions or perform any required operations with the result data
//         dispatch(setCurrentUser({email:userData.email, payValue:response.data.payValue, vipTime:response.data.vipTime}));
//       })
//       .catch(error => {
//         // console.log(error);
//         // Dispatch error actions or handle the error in any way you prefer
//         // dispatch(setCurrentError("Bitcoin Payment Failed!"));
//       });
// }

// get all userinfo when refresh
export const getUserInfo = (userData) => dispatch => {
  axios.post("http://localhost:5000/auth/getUserInfo",userData)
  .then( res => {
      dispatch(setCurrentUser({email:userData.email, payValue:res.data.payValue, vipTime:res.data.vipTime}));
   }
  )
  .catch(err=> {
    // console.log(err);
    // dispatch(setCurrentError("Connection Failed!"));
    async function fetchData() {
      const userCacheData = await getCacheData();
      dispatch(setCurrentUser({email:userCacheData.email, payValue:userCacheData.payValue, vipTime:userCacheData.vipTime}));
    }
    fetchData();
  })
}

// Set logged in user
export const setCurrentUser = decoded_data => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded_data
  };
};

// Set error message
export const setCurrentError = decoded_data => {
  return {
    type: GET_ERRORS,
    payload: decoded_data
  };
};

// Set error message
export const setCurrentSuccess = decoded_data => {
  return {
    type: GET_SUCCESS,
    payload: decoded_data
  };
}; 
// Logout user
export const logoutUser = (history) => dispatch => {

  // Remove token from local storage
  localStorage.removeItem("emailToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push("/");
};
  