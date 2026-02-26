import styles from "./header.module.css";
import teamBoardLogo from "../../assets/team-board-logo.png";
import { Link } from "react-router";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/dashboard">
        <img src={teamBoardLogo} alt="Team Board Logo" height={20} />
      </Link>
    </header>
  );
}
