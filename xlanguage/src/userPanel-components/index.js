import React from "react";
import {Helmet} from "react-helmet";
import PaymentForm from "./paymentFormNew";

export default function UserDisplay() {
    return(
        <div style={{width:"calc(100% - 300px)", height:"100%", position:"fixed", right:"0px", overflow:"auto"}}>
        <Helmet>
            <title>User GUI</title>
        </Helmet>
        <PaymentForm />
        </div>
    )
}
