import React from "react";
import useAuth from "../Hooks/useAuth";
import useRoles from "../Hooks/useRoles";

const AdminRoute = ({ Children }) => {
  const { isLoading } = useAuth();
  const { role, roleLoading } = useRoles();

  if (isLoading || roleLoading) return <p>Loading...</p>;

  if (role !== "admin") {
    return <div>access is forbidden</div>;
  }
  return Children;
};

export default AdminRoute;
