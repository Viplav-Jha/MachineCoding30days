import "../A.css";
import { FC } from "react";
interface ButtonProps {
  moveLeft: () => void;
  moveRight: () => void;
}
const ComponentsB: FC<ButtonProps> = ({ moveLeft, moveRight }) => {
  return (
    <div className="actions flex">
      <button onClick={moveRight}>&gt;</button>
      <button onClick={moveLeft}>&lt;</button>
    </div>
  );
};

export default ComponentsB;
