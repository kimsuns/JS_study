// https://learn.codeit.kr/1636/film-reviews/
// https://learn.codeit.kr/1636/foods/

import { getReviews } from "../api";
import ReviewList from "./ReviewList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewClick = () => {
    setOrder("createdAt");
  };

  const handleBestClick = () => {
    setOrder("rating");
  };

  const handleResetClick = () => {
    setItems(items);
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleNewClick}>최신순</button>
        <button onClick={handleBestClick}>별점순</button>
        <button onClick={handleResetClick}>초기화</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
