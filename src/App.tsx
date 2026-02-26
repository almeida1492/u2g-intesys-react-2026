import { BrowserRouter } from "react-router";
import { AppRoutes } from "./AppRoutes";
import styles from "./globals.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </div>
  );
}
