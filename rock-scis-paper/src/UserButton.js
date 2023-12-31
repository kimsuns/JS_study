import { useState } from "react";
import HandIcon from "./HandIcon";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const UserButton = ({ meButton }) => {
  // const [meClick, setMeClick] = useState('');


  return (
    <div>
      <button
        className="hand"
        onClick={(e) => {
          meButton('바위')
          console.log(e);
        }}
      >
        <HandIcon value="rock" />
      </button>
      <button
        className="hand"
        onClick={() => {
          meButton('가위')
        }}
      >
        <HandIcon value="scissor" />

      </button>
      <button
        className="hand"
        onClick={() => {
          meButton('보')
        }}
      >
        <HandIcon value="paper" />

      </button>
    </div>

  )
}

export default UserButton;