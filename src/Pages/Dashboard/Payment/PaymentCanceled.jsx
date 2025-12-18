import React from "react";
import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <div className="text-2xl">
      <h2>Payment is canceled. Please try again.</h2>
      <Link to="/dashboard/myorder">
        <button className="btn btn-primary text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCanceled;
