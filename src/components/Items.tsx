import React, { FC } from "react";
interface Props {
  items: number;
  handleChecked: (item: number) => void;
}
const Items: FC<Props> = ({ items, handleChecked }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          handleChecked(items);
        }}
      />
      {items}
    </label>
  );
};

export default Items;
