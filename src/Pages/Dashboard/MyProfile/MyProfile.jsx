import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useAuth();

  const { data: myProfile = {}, isLoading } = useQuery({
    queryKey: ["myProfile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/users/profile?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  const isAdmin = myProfile.role === "admin";
  const isChief = myProfile.role === "chief";

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="pt-6">
          <img
            src={myProfile.photoURL}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
        </figure>

        <div className="card-body text-center">
          <h2 className="text-xl font-bold">
            {myProfile.displayName || "User Name"}
          </h2>
          <p className="text-sm text-gray-500">{myProfile.email}</p>

          <div className="divider"></div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">📍 Address:</span>{" "}
              {myProfile.address || "N/A"}
            </p>
            <p>
              <span className="font-semibold ">🎭 Role:</span>{" "}
              <span className="badge badge-primary text-black">
                {myProfile.role || "user"}
              </span>
            </p>
            <p>
              <span className="font-semibold">⚡ Status:</span>{" "}
              <span className="badge badge-success">
                {myProfile.status || "active"}
              </span>
            </p>
            <p>
              <span className="font-semibold">👨‍🍳 Chef ID:</span>{" "}
              {myProfile.chefId || "-"}
            </p>
          </div>

          <div className="flex justify-center gap-2">
            <Link>
              <button
                className="btn btn-primary btn-sm text-black"
                disabled={isAdmin || isChief} // Disable if admin or chief
              >
                Be a Chief
              </button>
            </Link>
            <Link>
              <button
                className="btn btn-primary btn-sm text-black"
                disabled={isAdmin} // Disable if admin
              >
                Be an Admin
              </button>
            </Link>
            <Link className="">
              <button className="btn btn-primary btn-sm text-black">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
