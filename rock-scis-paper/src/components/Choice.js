import { useState } from "react";

const Choice = ({ ChoiceContatiner }) => {
  console.log(ChoiceContatiner);

  return (
    <div>
      <h2> 당신이 선택한 것은 {ChoiceContatiner.me}입니다. </h2>

      <h2> 상대가 선택한 것은 {ChoiceContatiner.com}입니다. </h2>
    </div>

  )

}

export default Choice;