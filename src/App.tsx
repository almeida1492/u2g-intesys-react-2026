import { useState } from "react";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./pages/Login";

export function App(props: { a: string }) {
  const [isLogged, setIsLogged] = useState(false);

  const changeLogState = () => {
    setIsLogged(true);
  };

  return (
    <>
      <Header />
      <Sidebar />

      {isLogged ? (
        <p>Dashboard</p>
      ) : (
        <Login setIsLogged={changeLogState}></Login>
      )}
    </>
  );
}
