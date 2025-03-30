"use client";

import { useState } from "react";
import { Icon } from "./icon";

export default function QtyButton() {
  const [count, setCount] = useState(1);
  return (
    <div
      className="w-20 h-7 flex items-center bg-[#404044] overflow-hidden rounded-xl"
      style={{ transition: "border 0.3 ease" }}
    >
      <button
        className="size-7 flex items-center justify-center border-none cursor-pointer hover:bg-[#505052]"
        style={{ transition: "all 0.3 ease" }}
        onClick={() => setCount(count - 1)}
        disabled={count <= 1}
      >
        <Icon.minus className="size-4" />
      </button>
      <p className="size-7 text-sm flex items-center justify-center">{count}</p>
      <button
        className="size-7 flex items-center justify-center border-none cursor-pointer hover:bg-[#505052]"
        style={{ transition: "all 0.3 ease" }}
        onClick={() => setCount(count + 1)}
      >
        <Icon.plus className="size-4" />
      </button>
    </div>
  );
}
