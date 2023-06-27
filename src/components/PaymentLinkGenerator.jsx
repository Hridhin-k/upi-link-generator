import React from 'react';
import '../App.css';

function PaymentLinkGenerator({ upiId, merchantName, transactionAmount }) {
  

  return (
    <>
   <a href={`upi://pay?pa=${upiId}&pn=${merchantName} K&am=${transactionAmount}&cu=INR`} class="upi-pay1">Pay Now!</a>

    </>
  );
}

export default PaymentLinkGenerator;
