import React, { useState, FC } from "react";
import ComponentsA from "./components/ComponentsA";
import ComponentsB from "./components/ComponentsB";
import "./A.css";
import { items } from "./data";
import { intersection, note } from "./utils";

interface Props {
  left: number;
  right: number;
  moveLeft: () => void;
  moveRight: () => void;
  handleChecked: (item: void) => void;
}

const App: FC<Props> = () => {
  const [leftItems, setLeftItems] = useState<number[]>(items);
  const [rightItems, setRightItems] = useState<number[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const leftCheckedItem = intersection(checkedItems, leftItems);
  const rightCheckedItem = intersection(checkedItems, rightItems);

  const handleChecked = (item: number) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckedItems(newCheckedItems);
  };
  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItem));
    setLeftItems(note(leftItems, leftCheckedItem));
    setCheckedItems(note(checkedItems, leftCheckedItem));
  };

  console.log(checkedItems);

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItem));
    setRightItems(note(rightItems, rightCheckedItem));
    setCheckedItems(note(checkedItems, rightCheckedItem));
  };

  return (
    <div className="App flex">
      <ComponentsA items={leftItems} handleChecked={handleChecked} />
      <ComponentsB moveLeft={moveLeft} moveRight={moveRight} />
      <ComponentsA items={rightItems} handleChecked={handleChecked} />
    </div>
  );
};

export default App;
