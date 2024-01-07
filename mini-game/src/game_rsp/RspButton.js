import { Children, useState } from "react";
import RspIcon from "./RspIcon";

function RspButton({ children }) {
  const [user, setUser] = useState("");

  const handleButton = () => {
    setUser(children);
    console.log(user);
  };

  return (
    <div>
      <button onClick={handleButton}>
        <RspIcon value={children} backgroundColor="#40089a" />
      </button>
    </div>
  );
}

export default RspButton;
