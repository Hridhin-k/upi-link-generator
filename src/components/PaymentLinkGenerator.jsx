import React from 'react';
import '../App.css';

function PaymentLinkGenerator({ upiId, merchantName, transactionAmount }) {
  const encodedUpiId = encodeURIComponent(upiId);
  const encodedTransactionAmount = encodeURIComponent(transactionAmount.toString());

  const transactionUrl = `upi://pay?pa=${encodedUpiId}&pn=${merchantName}&am=${encodedTransactionAmount}`;

  const handlePayment = () => {
    const userAgent = navigator.userAgent;

    if (/android/i.test(userAgent)) {
      window.location.href = `intent://scan/#Intent;scheme=${transactionUrl};package=com.google.android.apps.nbu.paisa.user;end;`;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = transactionUrl;
    } else {
      // Provide an alternative action if the deep linking is not supported on the device
      alert('Please install a UPI payment app to proceed with the payment.');
    }
  };

  return (
    <div>
      <button className="button" onClick={handlePayment}>
        Click here to send money
      </button>
    </div>
  );
}

export default PaymentLinkGenerator;
