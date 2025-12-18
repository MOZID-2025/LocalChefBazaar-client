import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp, IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";

const ApprovedChief = () => {
  const axiosSecure = useAxiosSecure();
  const { data: chiefs = [], refetch } = useQuery({
    queryKey: ["chief", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/chiefs");
      return res.data;
    },
  });

  const updatedChiefStatus = (chief, status) => {
    const updateInfo = { status: status, email: chief.email };
    axiosSecure.patch(`/chiefs/${chief._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Chief has been ${status}. `,
          showCancelButton: false,
          timer: 2500,
        });
        refetch();
      }
    });
  };

  const handleApproval = (chief) => {
    updatedChiefStatus(chief, "approved");
  };

  const handleRejection = (chief) => {
    updatedChiefStatus(chief, "rejected");
  };
  return (
    <div>
      <h2>Chief pending for approval: {chiefs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Statues</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chiefs.map((chief, index) => (
              <tr key={chief._id}>
                <th>{index + 1}</th>
                <td>{chief.name}</td>
                <td>{chief.email}</td>
                <td>{chief.status}</td>
                <td>{new Date(chief.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleApproval(chief)}
                    className="btn btn-primary btn-sm text-black mr-4"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(chief)}
                    className="btn btn-primary btn-sm text-black mr-4"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn btn-primary btn-sm text-black">
                    <IoTrashBin />
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

export default ApprovedChief;
