import React from "react";
import useAuth from "../Hooks/useAuth";
import useRoles from "../Hooks/useRoles";

const AdminRoute = ({ children }) => {
  const { isLoading } = useAuth();
  const { userRole, isLoading: roleLoading } = useRoles();

  if (isLoading || roleLoading) return <p>Loading...</p>;

  if (userRole?.toLowerCase() !== "admin") {
    return <div>Access is forbidden</div>;
  }

  return <>{children}</>;
};

export default AdminRoute;
