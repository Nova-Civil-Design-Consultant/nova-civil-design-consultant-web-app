import { useNavigate } from "react-router-dom";
import { AdminDashboardProps } from "../../types";

const AdminDashboard = ({ setUser }: AdminDashboardProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userSession"); // Remove only session data
    setUser(null); // Clear user state
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. You can manage users and content here.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
