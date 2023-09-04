import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Dispatch } from "react";

interface SelectProps {
  items: string[];
  onClickHandler?: Function;
  setValue: Dispatch<any>;
}

export default function Selector(props: SelectProps) {
  let items = props.items;
  const setValue = props.setValue;

  return (
    <Select
      onValueChange={(e) => {
        setValue(e);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>File Type</SelectLabel>
          {items.map((item: any) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
