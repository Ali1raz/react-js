import React from "react";

const oioi = [
  { id: 1, liked: true, count: 25 },
  { id: 2, liked: false, count: 34 },
  { id: 3, liked: false, count: 85 },
  { id: 4, liked: true, count: 63 },
  { id: 5, liked: true, count: 34 },
];

export default function LikesBtn() {
  const [data, setData] = React.useState(oioi);

  const toggleLiked = (id) => {
    // console.log(id);
    setData((p) =>
      p.map((d) =>
        d.id === id
          ? {
              ...d,
              liked: !d.liked,
              count: `${!d.liked ? +d.count + 1 : +d.count - 1}`,
            }
          : d
      )
    );
  };

  return (
    <div>
      <h1>Multiple Toggle Buttons</h1>
      <div className="d-flex align-items-start justify-content-around">
        {data.map((btn) => (
          <button
            key={btn.id}
            onClick={() => toggleLiked(btn.id)}
            className="btn px-2 btn-active-outline-0"
          >
            <span
              className={`fa${btn.liked ? "s" : "r"} fa-heart 
              ${btn.liked ? "text-danger" : "text-leght"}`}
            ></span>
            <span className="ms-2">{btn.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
