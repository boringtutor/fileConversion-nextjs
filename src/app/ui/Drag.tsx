"use client";

import { useDrag } from "react-dnd";

// interface DragProps {
//   name: string;
// }

export default function DragCard({ name }: any): any {
  const [{ isDragging }, dragRef] = useDrag({
    type: "language",
    item: { name },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div>
      <div ref={dragRef}>
        {name}
        {isDragging && "📂"}
      </div>
    </div>
  );
}
