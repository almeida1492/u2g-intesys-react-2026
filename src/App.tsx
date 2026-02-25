import { useState } from "react";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Login } from "./pages/Login";
import { ProjectForm } from "./components/projectForm/ProjectForm";

export function App(props: { a: string }) {
  const [isLogged, setIsLogged] = useState(false);
  const [projects, setProjects] = useState<{ title: string }[]>([]);

  const changeLogState = () => {
    setIsLogged(true);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />

      {projects.map((project, index) => (
        <div key={index}>{project.title}</div>
      ))}

      <ProjectForm
        handleSubmit={(values) => {
          setProjects([...projects, { ...values }]);
        }}
        // handleDelete={() => {}}
      />

      {/* {isLogged ? (
        <p>Dashboard</p>
      ) : (
        <Login setIsLogged={changeLogState}></Login>
      )} */}
    </>
  );
}
