import React from 'react'
import "../App.css";
function PaymentLinkGenerator({upiId,merchantName,transactionAmount}) {
    console.log(upiId,merchantName,transactionAmount,"META DATA")
    const encodedUpiId = encodeURIComponent(upiId);
   
    const transactionUrl = `upi://pay?pa=${encodedUpiId}&pn=${merchantName}&am=${transactionAmount.toString()}`;

  
    const handlePayment = () => {
      const userAgent = navigator.userAgent ;
      console.log(transactionUrl)
      if (/android/i.test(userAgent)) {
        window.location.href = `intent://scan/#Intent;scheme=${transactionUrl};package=com.google.android.apps.nbu.paisa.user;end;`;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = `upi://pay?pa=${encodedUpiId}&pn=${merchantName}&am=${transactionAmount}`;
      } else {
        // Provide an alternative action if the deep linking is not supported on the device
        alert('Please install a UPI payment app to proceed with the payment.');
      }
    };
  return (
    <div>
    <button className="button" onClick={handlePayment}>Click here to send money</button>
    </div>
  )
}

export default PaymentLinkGenerator
