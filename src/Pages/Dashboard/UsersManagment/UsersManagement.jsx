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
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
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
            {users.map((u, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{u.displayName}</td>
                <td>{u.email}</td>
                <td>
                  <img
                    src={u.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>

                <td>{u.role || "user"}</td>
                <td>
                  {u.role === "admin" ? (
                    <button className="btn">
                      {" "}
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(u)}
                      className="btn btn-sm"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>{u.status || "active"}</td>

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
