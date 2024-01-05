import rockImage from "../assets/rock.svg";
import scissorImage from "../assets/scissor.svg";
import paperImage from "../assets/paper.svg";

import "../css/HandIcon.css";

import UserButton from "./UserButton";
import Result from "./Result";

const HandIcon = ({ value }) => {
  const valueImage = {
    rock: rockImage,
    scissor: scissorImage,
    paper: paperImage,
  };

  return (
    <div className="rsp-img">
      <img src={valueImage[value]} alt="your choice" />

      {/* <img src={rockImage} alt="rock" />
      <img src={scissorImage} alt="scissor" />
      <img src={paperImage} alt="paper" /> */}
    </div>
  );
};

export default HandIcon;
