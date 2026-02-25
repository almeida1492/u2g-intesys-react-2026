import { useState } from "react";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Login } from "./pages/Login";
import { ProjectForm } from "./components/projectForm/ProjectForm";

export function App(props: { a: string }) {
  const [isLogged, setIsLogged] = useState(false);
  const [projects, setProjects] = useState<{ title: string; description?: string }[]>([]);

  const changeLogState = () => {
    setIsLogged(true);
  };

  return (
    <>
      <Header />
      <Sidebar />

      {projects.map((project, index) => (
        <div key={index}>
          <strong>{project.title}</strong>
        </div>
      ))}

      <ProjectForm
        onSubmit={(values) => {
          setProjects([{ ...values }, ...projects]);
        }}
      />
    </>
  );
}