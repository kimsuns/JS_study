import ReviewList from "./ReviewList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewClick = () => {
    setOrder("createdAt");
  };

  const handleBestClick = () => {
    setOrder("rating");
  };

  const handleResetClick = () => {
    setItems(mockItems);
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleNewClick}>최신순</button>
        <button onClick={handleBestClick}>별점순</button>
        <button onClick={handleResetClick}>초기화</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
