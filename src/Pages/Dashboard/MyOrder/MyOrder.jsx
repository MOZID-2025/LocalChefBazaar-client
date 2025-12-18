import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyOrder = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: order = [], refetch } = useQuery({
    queryKey: ["myOrder", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
  });

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // After confirming delete
        axiosSecure.delete(`/order/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The order has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2>All of my order: {order.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>SL No.</th>
              <th>Name</th>
              <th>Order Status</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>Delivery Time</th>
              <th>Chef ID</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {order.map((o, index) => (
              <tr key={o._id}>
                <th>{index + 1}</th>
                <td>{o.mealName}</td>
                <th>{o.orderStatus}</th>
                <th>{o.price} </th>
                <th>{o.quantity}</th>
                <th>{o.orderTime}</th>
                <th>{o.chefId}</th>
                <th>
                  {o.paymentStatus === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    <Link to={`/dashboard/payment/${o._id}`}>
                      <button className="btn btn-primary text-black btn-sm">
                        Pay
                      </button>
                    </Link>
                  )}
                </th>
                <td>
                  <button className="btn btn-square">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square mx-2">
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleOrderDelete(o._id)}
                    className="btn btn-square"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
