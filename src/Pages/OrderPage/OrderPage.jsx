import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../src/context/AuthContext/AuthContext";

const OrderPage = () => {
  const meal = useLoaderData();
  const { user } = useContext(AuthContext);

  const orderId = meal?._id;
  const mealName = meal?.foodName;
  const price = Number(meal?.foodPrice);
  const chefId = meal?.chefId;

  const [quantity, setQuantity] = useState(1);
  const [userAddress, setUserAddress] = useState("");

  const userEmail = user?.email || "";
  const totalPrice = price * quantity;

  const handleOrder = () => {
    Swal.fire({
      title: `Total Price: $${totalPrice}`,
      text: "Do you want to confirm the order?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          orderId,
          mealName,
          price,
          quantity,
          chefId,
          paymentStatus: "Pending",
          userEmail,
          userAddress,
          orderStatus: "pending",
          orderTime: new Date().toISOString(),
        };

        try {
          await axios.post("http://localhost:3000/order", orderData);

          Swal.fire({
            icon: "success",
            title: "Order placed successfully!",
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Failed to place order!",
            text: "Something went wrong. Try again.",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Confirm Your Order
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          readOnly
          value={mealName || ""}
          className="w-full p-3 border rounded bg-gray-100"
        />

        <input
          type="text"
          readOnly
          value={price || ""}
          className="w-full p-3 border rounded bg-gray-100"
        />

        <select
          className="w-full p-3 border rounded"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>

        <input
          type="text"
          readOnly
          value={chefId || ""}
          className="w-full p-3 border rounded bg-gray-100"
        />

        {/* Logged-in User Email */}
        <input
          type="text"
          readOnly
          value={userEmail}
          className="w-full p-3 border rounded bg-gray-100"
        />

        <textarea
          placeholder="Enter delivery address"
          className="w-full p-3 border rounded"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          required
        />

        <h3 className="text-lg font-semibold">
          Total Price: <span className="text-green-600">${totalPrice}</span>
        </h3>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
