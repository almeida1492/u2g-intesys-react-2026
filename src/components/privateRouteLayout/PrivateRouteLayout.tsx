import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import styles from "../../globals.module.css";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { projectApi } from "../../services";

export const PrivateRouteLayout = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await projectApi.getAllProjects({});
        setProjects(response);
      } catch (error) {
        console.error("Error loading projects", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar projects={projects} />
      <Outlet />
    </div>
  );
};