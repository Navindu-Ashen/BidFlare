import React from "react";

function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs">
        <div className="flex items-center justify-center mb-4">
        <img
            src="src/image/success.gif" alt="Successful " className="w-200 h-156"/>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Payment Approved</h2>
        <p className="text-gray-600 mt-2">
          Your payment has been successfully approved.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
        >
            <a href="/">
          OK</a>
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
