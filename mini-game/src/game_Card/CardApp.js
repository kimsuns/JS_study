import "./styles/Card.css"
import Card from "./Card";

function CardApp () {
  const cardList = ['red','yellow','orange','green','blue']
  return (
    <div>
      <h2> 카드 짝 맞추기 </h2>
      <div className="cardBoard">
      <Card>{cardList[0]}</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>
      <Card>빨강</Card>

      </div>
      <button>빨강</button>
      <button>빨강</button>
      <button>노랑</button>
      <button>노랑</button>
      <button>노랑</button>
      <button>노랑</button>

    </div>
  )
}

export default CardApp;