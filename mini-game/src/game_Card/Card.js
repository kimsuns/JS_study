import "./styles/Card.css"

function Card ({chidren}) {

  const cardCheck = () => {
    {chidren}
  }
  return(
    <div>
      <button className="cardItem" onClick={cardCheck}>{chidren}</button>
    </div>
  )
}

export default Card;