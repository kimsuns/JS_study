import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

function RspIcon({ value }) {
  const buttonIcon = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
  };

  const src = buttonIcon[value];

  return (
    <div>
      <img src={src} alt={value}></img>
    </div>
  );
}

export default RspIcon;
