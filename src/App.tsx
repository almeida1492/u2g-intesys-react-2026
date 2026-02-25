import { useState } from "react";
import { Header } from "./components/header/Header";
import styles from "./globals.module.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";

export function App() {
  const [appStatus, setAppStatus] = useState<"LOGIN" | "DASHBOARD">("LOGIN");

  return (
    <div className={styles.app}>
      <Header />
      {appStatus === "DASHBOARD" ? (
        <Dashboard />
      ) : (
        <Login goToProjects={() => setAppStatus("DASHBOARD")} />
      )}
    </div>
  );
}