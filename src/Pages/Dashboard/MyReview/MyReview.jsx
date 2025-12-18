import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: review = [] } = useQuery({
    queryKey: ["my-review", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>MY all Review: {review.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>SL No.</th>
              <th>Meal Name </th>
              <th>Rating </th>
              <th>Comment </th>
              <th>Date </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {review.map((r, index) => (
              <tr key={r._id}>
                <th>{index + 1}</th>
                <td>{r.mealName}</td>
                <td>{r.ratings}</td>
                <td>{r.testimonial}</td>
                <td>{r.ratings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
