import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyOrder = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: order = [] } = useQuery({
    queryKey: ["myOrder", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>All of my order: {order.length}</h2>
    </div>
  );
};

export default MyOrder;
