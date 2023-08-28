import { FC } from "react";
import { DropTargetMonitor } from "react-dnd";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import React from "react";
import { cn } from "@/app/lib/utils";
export interface TargetBoxProps {
  onDrop: (item: { files: any[] }) => void;
  classNames?: string;
}

export const TargetBox: FC<TargetBoxProps> = (props) => {
  const { onDrop, classNames } = props;
  let [flag, setFlag] = React.useState(false);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: any[] }) {
        if (onDrop) {
          setFlag(true);
          onDrop(item);
        }
      },
      canDrop(item: any) {
        //console.log("canDrop", item.files, item.items);
        return true;
      },
      hover(item: any) {
        //console.log("hover", item.files, item.items);
      },
      collect: (monitor: DropTargetMonitor) => {
        const item = monitor.getItem() as any;
        if (item) {
          // console.log("collect", item.files, item.items);
        }

        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [props]
  );

  const isActive = canDrop && isOver;
  //console.log(flag);
  return (
    <div ref={drop} className={cn("", classNames)}>
      {flag ? "📂 " : isActive ? "Release to drop" : "Drag file here"}
    </div>
  );
};
