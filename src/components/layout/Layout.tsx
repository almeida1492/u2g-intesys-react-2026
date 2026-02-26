import { Outlet } from "react-router";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = () => {
  return (
    <main>
      <Header></Header>
      <Sidebar></Sidebar>

      <Outlet></Outlet>
    </main>
  );
};
