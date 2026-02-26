import { Outlet } from "react-router";
import styles from "../../globals.module.css";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

export const PrivateRouteLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />

      <Outlet />
    </div>
  );
};
