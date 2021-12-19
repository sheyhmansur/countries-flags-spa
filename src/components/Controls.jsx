import { useState, useEffect } from "react";
import { Search } from "./Search";

export const Controls = () => {
  const [search, setSeacrh] = useState(""); // Чтобы сделать поиск управляемым

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};
