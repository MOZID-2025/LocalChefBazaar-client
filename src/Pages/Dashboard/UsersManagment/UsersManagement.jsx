import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: users = [],
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} marked as a admin `,
          showCancelButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} remove from admin `,
          showCancelButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div>
      <h2>Users Management: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="text-center">
              <th>SL No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Image</th>
              <th>User Role</th>
              <th>Admin Action</th>
              <th>User Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>

                <td>{user.role || "user"}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-300"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>{user.status || "active"}</td>

                <td>
                  <Link to="">
                    <button className="btn btn-primary mr-4 text-black btn-sm">
                      Make Fraud
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
