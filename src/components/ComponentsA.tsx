// ComponentsA.tsx

import React from "react";
import Items from "./Items";

interface ComponentsAProps {
  items: number[];
  handleChecked: (item: number) => void;
}

const ComponentsA: React.FC<ComponentsAProps> = ({ items, handleChecked }) => {
  return (
    <div className="box flex">
      {items.map((item) => {
        return <Items key={item} items={item} handleChecked={handleChecked} />;
      })}
    </div>
  );
};

export default ComponentsA;
