import { Children } from "react";

function Button({ Children }) {
  return (
    <div>
      <button>{Children}</button>
    </div>
  );
}

export default Button;
