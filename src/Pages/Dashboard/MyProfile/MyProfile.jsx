import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const MyProfile = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/users");
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>My Profile</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="text-center">
              <th>SL No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Image</th>
              <th>User Address</th>
              <th>User Role</th>
              <th>User Status</th>
              <th>Chef Id</th>
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
                <td>{u.address || "N/A"}</td>
                <td>{u.role || "user"}</td>
                <td>{u.status || "active"}</td>
                <td>{u.chefId || "-"}</td>
                <td>
                  <Link to="/chief">
                    <button className="btn btn-primary mr-4 text-black btn-sm">
                      Be a chief
                    </button>
                  </Link>
                  <Link>
                    <button className="btn btn-primary text-black btn-sm">
                      Be an Admin
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

export default MyProfile;
