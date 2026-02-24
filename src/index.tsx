import ReactDOM from "react-dom/client";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/Sidebar";

function App(props: { a: string }) {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

const el = document.getElementById("root");

if (!el) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(el);

root.render(<App a="hey, I'm a prop!" />);
