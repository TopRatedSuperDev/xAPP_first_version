import { CLIENT_ID } from '../Config/Config'
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentError, setCurrentSuccess, payRecord, coinbasePay, webHooksResult } from '../actions/authActions';
import axios from 'axios';

export default function PaymentForm () {
    // form state
    const [formContentClass, setFormContentClass] = useState({card:"tab-pane fade show active", paypal:"tab-pane fade", bank:"tab-pane fade"});
    const [timeButtonClass, setTimeButtonClass] = useState({year:"nav-link active rounded-pill", month:"nav-link rounded-pill"});
    const [formButtonClass, setFormButtontClass] = useState({card:"nav-link active rounded-pill", paypal:"nav-link rounded-pill", bank:"nav-link rounded-pill"});
    // bitcoin state
    const [bitcoinPaymentAddress, setBitcoinPaymentAddress] = useState('');
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
            setBillPayValue(30);
            setTimeButtonClass(prevState => ({
                ...prevState, year:"nav-link rounded-pill", month:"nav-link active rounded-pill"
            }));
        }
    };

    const formContentChange = (content) => {
        if(content === "card") {
            setFormButtontClass(prevState => ({
                ...prevState, card:"nav-link active rounded-pill", paypal:"nav-link rounded-pill", bank:"nav-link rounded-pill"
            }));
            setFormContentClass(prevState => ({
                ...prevState, card:"tab-pane fade show active", paypal:"tab-pane fade", bank:"tab-pane fade"
            }));
        } else if(content === "paypal") {
            setFormButtontClass(prevState => ({
                ...prevState, card:"nav-link rounded-pill", paypal:"nav-link active rounded-pill", bank:"nav-link rounded-pill"
            }));
            setFormContentClass(prevState => ({
                ...prevState, card:"tab-pane fade", paypal:"tab-pane fade show active", bank:"tab-pane fade"
            }));
        } else if(content === "bank") {
            setFormButtontClass(prevState => ({
                ...prevState, card:"nav-link rounded-pill", paypal:"nav-link rounded-pill", bank:"nav-link active rounded-pill"
            }));
            setFormContentClass(prevState => ({
                ...prevState, card:"tab-pane fade", paypal:"tab-pane fade", bank:"tab-pane fade show active"
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
            dispatch(setCurrentError("Paypal Payment Failed!"));
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


    /////////// bitcoin integration start //////////////////

    const handlePay = async () => {
      dispatch(coinbasePay({email:userInfo.email, amount:billPayValue, currency: "USD"}));
    };

    /////////// bitcoin integration end //////////////////

    return (
     
            <div className="container-fluid" style={{width:"65vw"}}>
                <h3  style={{margin:"30px 0px 30px"}}>Your Email : {userInfo.email}</h3>
                <h3  style={{margin:"10px 0px 30px"}}>You paid : ${userInfo.payValue}</h3>
                <h3  style={{margin:"10px 0px 30px"}}>Your Available Time : until {userInfo.vipTime}</h3>
                <div className="row"  style={{margin:"30px 0px 30px"}}>
                    <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3" style={{fontSize:"20px", border:"1px solid #ccc", padding:"2px"}}>
                      <li className="nav-item" onClick={()=>timeButtonChange("year")} style={{width:"50%"}}>
                        <a data-toggle="pill" href="#nav-tab-year" className={timeButtonClass.year} style={{margin:"0px", textDecoration:"none"}}>
                                            Bill yearly $60 (monthly $5)
                                        </a>
                      </li>
                      <li className="nav-item" onClick={()=>timeButtonChange("month")} style={{width:"50%"}}>
                        <a data-toggle="pill" href="#nav-tab-month" className={timeButtonClass.month} style={{margin:"0px", textDecoration:"none"}}>
                                            Bill 3 months $30 (monthly $10)
                                        </a>
                      </li>
                    </ul>
                </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="bg-white rounded-lg shadow-sm p-5" style={{minHeight:"500px", border:"1px solid #cccccc", borderRadius:"20px"}}>
                   
                    <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                      <li className="nav-item" onClick={()=>formContentChange("card")}>
                        <a data-toggle="pill" href="#nav-tab-card" className={formButtonClass.card} style={{margin:"0px"}}>
                                            <i className="fa fa-bitcoin" style={{marginRight:"7px"}}></i>
                                            Bitcoin
                                        </a>
                      </li>
                      <li className="nav-item" onClick={()=>formContentChange("paypal")}>
                        <a data-toggle="pill" href="#nav-tab-paypal" className={formButtonClass.paypal} style={{margin:"0px"}}>
                                            <i className="fa fa-paypal" style={{marginRight:"7px"}}></i>
                                            Paypal
                                        </a>
                      </li>
                      <li className="nav-item" onClick={()=>formContentChange("bank")}>
                        <a data-toggle="pill" href="#nav-tab-bank" className={formButtonClass.bank} style={{margin:"0px"}}>
                                            <i className="fa fa-university" style={{marginRight:"7px"}}></i>
                                            Bank Transfer
                                        </a>
                      </li>
                    </ul>
                    
                    <div className="tab-content">

                      
                      <div id="nav-tab-card" className={formContentClass.card}>
                        {/* <p className="alert alert-success">Some text success or error</p> */}
                        {/* <form>
                          <div className="form-group" style={{marginBottom:"10px"}}>
                            <label htmlFor="username">Full name (on the card)</label>
                            <input type="text" name="username" placeholder="Jassa" required className="form-control" />
                          </div>
                          <div className="form-group" style={{marginBottom:"10px"}}>
                            <label htmlFor="cardNumber">Card number</label>
                            <div className="input-group">
                              <input type="text" name="cardNumber" placeholder="Your card number" className="form-control" required />
                              <div className="input-group-append">
                                <span className="input-group-text text-muted" style={{height:"100%", borderBottomLeftRadius:"0px", borderTopLeftRadius:"0px"}}>
                                                            <i className="fa fa-cc-visa mx-1"></i>
                                                            <i className="fa fa-cc-amex mx-1"></i>
                                                            <i className="fa fa-cc-mastercard mx-1"></i>
                                                        </span>
                              </div>
                            </div>
                          </div>
                          <div className="row"  style={{marginBottom:"10px"}}>
                            <div className="col-sm-8">
                              <div className="form-group">
                                <label><span className="hidden-xs">Expiration</span></label>
                                <div className="input-group">
                                  <input type="number" placeholder="MM" name="" className="form-control" required />
                                  <input type="number" placeholder="YY" name="" className="form-control" required />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group mb-4">
                                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                            <i className="fa fa-question-circle"></i>
                                                        </label>
                                <input type="text" required className="form-control" />
                              </div>
                            </div>



                          </div>
                          <button type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm" style={{width:"100%"}}> Confirm  </button>
                        </form> */}
                        <div className="wrapper">
                            <div className="product-info">
                            <h5 className="alert alert-success"><b>Bitcoin</b> is easist way to pay online</h5>
                            <h5 className="alert alert-danger">Please <b>refresh</b> this page once payment is complete!</h5>
                                <div className="product-text" style={{marginTop:"60px"}}>
                                    <h3>Pay Now: ${billPayValue}</h3>
                                </div>
                                <div className="product-price-btn">
                                    <button className='subscribe btn btn-primary btn-block rounded-pill shadow-sm buy-btn' type="submit" onClick={() => handlePay()} style={{width:"25%", marginTop:"30px"}}>
                                        Buy now
                                    </button>
                                    <br></br>
                                    
                                </div>
                            </div>
                        </div>
                      </div>
                    

                    
                      <div id="nav-tab-paypal" className={formContentClass.paypal}>
                      <h5 className="alert alert-danger"><b>Paypal</b> is easist way to pay online</h5>
                        {/* <p>Paypal is easiest way to pay online</p>
                        <p>
                          <button type="button" className="btn btn-primary rounded-pill"><i className="fa fa-paypal mr-2"></i> Log into my Paypal</button>
                        </p>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> */}
                        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                            <div>
                                <div className="wrapper">
                                    <div className="product-info">
                                        <div className="product-text" style={{marginTop:"60px"}}>
                                            <h3>Pay Now: ${billPayValue}</h3>
                                        </div>
                                        <div className="product-price-btn">
                                            <button className='subscribe btn btn-primary btn-block rounded-pill shadow-sm buy-btn' type="submit" onClick={() => setSuccessPay(true)} style={{width:"25%", marginTop:"30px"}}>
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
                     
                      <div id="nav-tab-bank" className={formContentClass.bank}>
                        <h6>Bank account details</h6>
                        <dl>
                          <dt>Bank</dt>
                          <dd> THE WORLD BANK</dd>
                        </dl>
                        <dl>
                          <dt>Account number</dt>
                          <dd>7775877975</dd>
                        </dl>
                        <dl>
                          <dt>IBAN</dt>
                          <dd>CZ7775877975656</dd>
                        </dl>
                      </div>
                     
                    </div>
                   

                  </div>
                </div>
              </div>
          </div>
     
      
)

}
