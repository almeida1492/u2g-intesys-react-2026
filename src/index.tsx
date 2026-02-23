import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/HeaderComponent";
import { Sidebar } from "./components/Sidebar";
import { BlocBody } from "./components/BlocBody";

function Component(props: { a: string }) {
  return (
    <div className="app">
      <div className="header">
        <HeaderComponent />
      </div>

      <div className="content">
        <Sidebar />
        <BlocBody />
      </div>
    </div>
  );
}

const el = document.getElementById("root");

if (!el) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(el);

root.render(<Component a="hey, I'm a prop!" />);
