import React from "react";

function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <svg
              className="w-8 h-8 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4L9 16.2z" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Payment Approved</h2>
        <p className="text-gray-600 mt-2">
          Your payment has been successfully approved.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          onClick={() => alert("Thank you for your payment!")}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
