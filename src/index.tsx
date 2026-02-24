import ReactDOM from "react-dom/client";
import { App } from "./App";

const el = document.getElementById("root");

if (!el) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(el);

root.render(<App a="hey, I'm a prop!"></App>);
