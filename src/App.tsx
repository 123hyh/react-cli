import React, { useState } from "react";
import Home from "@/view/Home/Home";
export default function App() {
  const [data, setData] = useState({ count: 2 });
  function handlerClick() {
    setData({ count: data.count += 1 });
  }
  return (
    <div>
      <Home count={data.count} handlerClick={() => handlerClick()} />
    </div>
  );
}
