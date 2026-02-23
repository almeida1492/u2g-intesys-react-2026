import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importation du composant chef d'orchestre

const el = document.getElementById("root");

// Sécurité pour TypeScript : on vérifie que la div "root" existe bien dans index.html
if (!el) {
    throw new Error("L'élément root n'a pas été trouvé. Vérifie ton fichier index.html");
}

const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);