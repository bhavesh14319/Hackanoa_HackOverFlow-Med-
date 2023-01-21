import React from "react";

function Hospitals_list() {
  const list = [
    {
      id: "a",
      name: "Robin",
    },
    {
      id: "b",
      name: "Dennis",
    },
  ];

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hospitals_list;
