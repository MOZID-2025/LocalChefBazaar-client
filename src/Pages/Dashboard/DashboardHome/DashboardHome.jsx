import useRoles from "../../../Hooks/useRoles";
import AdminDashboard from "./AdminDashboard";
import ChiefDashboard from "./ChiefDashboard";
import UserDashboard from "./UserDashboard";

const DashboardHome = () => {
  const { userRole, isLoading } = useRoles();

  if (isLoading || !userRole) {
    return <div>Loading...</div>;
  }

  const role = userRole.toLowerCase();

  if (role === "admin") {
    return <AdminDashboard />;
  }

  if (role === "chief") {
    return <ChiefDashboard />;
  }

  return <UserDashboard />;
};

export default DashboardHome;
