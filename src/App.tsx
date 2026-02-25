import { useState } from "react";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Login } from "./pages/Login";
import { ProjectForm } from "./components/projectForm/ProjectForm";


type Column = { id: number; title: string };

type Project = {
  id: number;
  title: string;
  description: string;
  members: string;
  columns: Column[];
};

export function App(props: { a: string }) {
  const [isLogged, setIsLogged] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);

  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const changeLogState = () => {
    setIsLogged(true);
  };

  return (
    <>
      <Header />
      <Sidebar projects={projects} deleteProject={deleteProject} />

      {projects.map((project, index) => (
        <div key={index}>{project.title}</div>
      ))}

      <ProjectForm
        handleSubmit={(values) => {
          setProjects([...projects, { ...values, id: Date.now() }]);
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
