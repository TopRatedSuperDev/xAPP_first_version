import { CLIENT_ID } from '../Config/Config'
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentError, setCurrentSuccess, payRecord } from '../actions/authActions';

export default function PaymentForm () {
    // form state
    const [timeButtonClass, setTimeButtonClass] = useState({year:"nav-link active rounded-pill", month:"nav-link rounded-pill"});
    // paypal state
    const [billPayValue, setBillPayValue] = useState(60);
    const [show, setShow] = useState(false);
    const [successPay, setSuccessPay] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    const [userInfo, setUserInfo] = useState({email:"", payValue:0, vipTime:0});

    const currentUser = useSelector((state)=>state.auth.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(currentUser.email !== ""){
            setUserInfo(currentUser);
        }
      }, [currentUser]);

    const timeButtonChange = (time) => {
        if(time === "year") {
            setBillPayValue(60);
            setTimeButtonClass(prevState => ({
                ...prevState, year:"nav-link active rounded-pill", month:"nav-link rounded-pill"
            }));
        } else {
            setBillPayValue(10);
            setTimeButtonClass(prevState => ({
                ...prevState, year:"nav-link rounded-pill", month:"nav-link active rounded-pill"
            }));
        }
    };
    /////////// paypal integration start //////////////////

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "xCSS-Service",
                    amount: {
                        currency_code: "USD",
                        value: billPayValue,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccessPay(true);
        }).catch(err=>{
            dispatch(setCurrentError("Payment Failed!"));
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (successPay) {
            dispatch(setCurrentSuccess("Payment Successfully!"));
            dispatch(payRecord({email:userInfo.email, payValue:billPayValue}));
            console.log('Order successful . Your order id is--', orderID);
            setSuccessPay(false);
        }
    },[successPay]);
     
    /////////// paypal integration end //////////////////

    return (
     
            <div className="container-fluid" style={{width:"75vw"}}>
              <div className='row'>
                <div className='col-lg-6'>
                  <h4  style={{margin:"30px 0px 30px"}}>Your Email : {userInfo.email}</h4>
                  <h4  style={{margin:"10px 0px 30px"}}>You paid : ${userInfo.payValue}</h4>
                  <h4  style={{margin:"10px 0px 30px"}}>Your Available Time : until {userInfo.vipTime}</h4>
                </div>
                <div className='col-lg-6'>
                  <div className="row"  style={{margin:"30px 0px 30px"}}>
                      <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3" style={{fontSize:"20px", border:"1px solid #ccc", padding:"2px"}}>
                        <li className="nav-item" onClick={()=>timeButtonChange("year")} style={{width:"50%"}}>
                          <a data-toggle="pill" href="#nav-tab-year" className={timeButtonClass.year} style={{margin:"0px", textDecoration:"none"}}>
                                              Bill yearly $60 (monthly $5)
                                          </a>
                        </li>
                        <li className="nav-item" onClick={()=>timeButtonChange("month")} style={{width:"50%"}}>
                          <a data-toggle="pill" href="#nav-tab-month" className={timeButtonClass.month} style={{margin:"0px", textDecoration:"none"}}>
                                              Bill monthly $10
                                          </a>
                        </li>
                      </ul>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="bg-white rounded-lg shadow-sm p-5" style={{minHeight:"500px", border:"1px solid #cccccc", borderRadius:"20px"}}>
                        <div className="tab-content">
                          <div id="nav-tab-paypal" className="tab-pane fade show active">
                            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                                <div>
                                    <div className="wrapper">
                                        <div className="product-info">
                                            <div className="product-text" style={{marginTop:"60px"}}>
                                                <h3>Pay Now: ${billPayValue}</h3>
                                            </div>
                                            <div className="product-price-btn">
                                                <button className='subscribe btn btn-primary btn-block rounded-pill shadow-sm buy-btn' type="submit" onClick={() => setShow(true)} style={{width:"25%", marginTop:"30px"}}>
                                                    Buy now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {show ? (
                                        <PayPalButtons
                                            style={{ layout: "vertical" }}
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                        />
                                    ) : null}
                                </div>
                            </PayPalScriptProvider>
                          </div>   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
     
      
)

}
