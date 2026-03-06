import { useDroppable } from "@dnd-kit/core";
import { CardItem } from "./CardItem";
import type { ColumnResponse } from "../../api";
import styles from "../../pages/kanbanBoard/kanbanboard.module.css";

export function ColumnItem({ column }: { column: ColumnResponse }) {
  const { setNodeRef } = useDroppable({ id: String(column.id) });
  return (
    <div ref={setNodeRef} className={styles.column}>
      <h2>{column.title}</h2>
      {column.cards?.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}