import React from "react";
import ColorBlock from "./ColorBlock";

export default function ColorTitleList({ list }) {
  const legend = list.map((item, index) => {
    return (
      <div className="mt-4" key={index}>
        <ColorBlock color={item.color} />
        <div>{item.value}</div>
      </div>
    );
  });

  return <div>{legend}</div>;
}
