import styles from "./header.module.css";
import teamBoardLogo from "../../assets/team-board-logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={teamBoardLogo} alt="Team Board Logo" height={20} />
    </header>
  );
}
