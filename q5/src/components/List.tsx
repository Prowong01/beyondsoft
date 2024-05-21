import React, { useEffect, useState } from "react";
import "../index.css";

interface ListItem {
  background: string;
}

const getList = (num: number): Promise<ListItem[]> => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      const colors = Array.from({ length: num }, () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return { background: `rgb(${r},${g},${b})` };
      });
      resolve(colors);
    }, delay);
  });
};

const List: React.FC = () => {
  const [list, setList] = useState<ListItem[]>([
    { background: "rgb(233,32,38)" },
  ]);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (list.length >= 50) return;
    console.log(list);
    setLoading(true);
    const newItems = await getList(10);
    setList((prevList) => [...prevList, ...newItems]);
    setLoading(false);
  };

  useEffect(() => {
    loadMore();
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight / 2;
      if (scrollPosition >= threshold && !loading && list.length < 50) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list, loading]);

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          className="list-item"
          style={{ background: item.background }}
        >
          {index}
        </div>
      ))}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default List;
