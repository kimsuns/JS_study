import { useState } from "react";
import HandIcon from "./HandIcon";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const UserButton = ({ meButton }) => {
  // const [meClick, setMeClick] = useState('');


  return (
    <div>
      <button
        name="rock"
        value={'바위'}
        onClick={(e) => {
          meButton('바위')

        }}
      >
        <HandIcon value="rock" />
      </button>
      <button
        name="scissor"
        onClick={() => {
          meButton('가위')
        }}
      >
        <HandIcon value="scissor" />

      </button>
      <button
        name="paper"
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