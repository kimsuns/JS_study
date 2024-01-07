import { useState } from "react";
import RspButton from "./RspButton";
import RspIcon from "./RspIcon";

function randRsp() {
  const rsp = ["rock", "scissor", "paper"];
  const randomRsp = rsp[Math.ceil(Math.random() * 2)];
  return randomRsp;
}

function Rsp() {
  const [userRsp, setUserRsp] = useState("");
  const [comRsp, setComRsp] = useState("");

  const handleUserRsp = () => {
    setUserRsp("rock");
    setComRsp(randRsp());
  };

  return (
    <div>
      <div>
        <RspIcon value={userRsp} /> vs <RspIcon value={comRsp} />
      </div>
      <RspButton>rock</RspButton>
      <RspButton>scissor</RspButton>
      <RspButton>paper</RspButton>
    </div>
  );
}

export default Rsp;
