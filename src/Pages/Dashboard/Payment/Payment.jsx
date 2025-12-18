import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { orderId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order/${orderId}`);
      return res.data.result;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      price: order.price,
      orderId: order._id,
      userEmail: order.userEmail,
      mealName: order.mealName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);

    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-ring loading-xl"></span>;
      </div>
    );
  }

  return (
    <div className="">
      <h2>
        Please pay ${order?.price} for: {order?.mealName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;
