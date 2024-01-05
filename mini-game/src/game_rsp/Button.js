import { Children, useState } from "react";

function Button({ chidren }) {
  const [user, setUser] = useState("");
  const user = Children

  const handleButton = () => {
    setUser({ chidren });
  };

  return (
    <div>
      <h2>당신의 선택은 {user}</h2>
      <button onClick={handleButton}>{chidren}</button>
    </div>
  );
}

export default Button;
