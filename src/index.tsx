import ReactDOM from "react-dom/client";
import Header from "./components/header/header";
import Siderbar from "./components/siderbar/siderbar";

function Component() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Siderbar />
        <main className="main">
          <h1>TEAM BOARD</h1>
        </main>
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
