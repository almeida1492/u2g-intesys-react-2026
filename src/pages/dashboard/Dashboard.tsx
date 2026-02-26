import { useNavigate, useParams } from "react-router";
import globalStyles from "../../globals.module.css";

export function Dashboard() {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleNavigation = () => {
    console.log("navigation");

    navigate("/login");
  };

  return (
    <main className={globalStyles.main}>
      <h1>Dashboard</h1>
    </main>
  );
}
