import ReactDOM from "react-dom/client";

function Component(props: { a: string }) {
  return <div className="header">This is right out of the oven: {props.a}</div>;
}

const el = document.getElementById("root");


if (!el) {
    throw new Error("L'élément root n'a pas été trouvé. Vérifie ton fichier index.html");
}

const root = ReactDOM.createRoot(el);

root.render(<Component a="hey, I'm a prop!" />);
