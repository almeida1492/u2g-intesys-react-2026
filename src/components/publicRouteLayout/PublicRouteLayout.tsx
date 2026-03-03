import type { PropsWithChildren } from "react";
import styles from "../../globals.module.css";
import publicRouteLayoutStyles from "./publicRouteLayout.module.css";
import teamBoardLogo from "../../assets/team-board-logo.png";

export function PublicRouteLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.app}>
      <div className={publicRouteLayoutStyles.logo}>
        <img src={teamBoardLogo} alt="TeamBoard logo" width={250} />
      </div>
      {children}
    </div>
  );
}
