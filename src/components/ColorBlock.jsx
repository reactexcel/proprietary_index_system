import React from "react";

export default function ColorBlock({ color }) {
  return (
    <div className="calendar-legend mr-3" style={{ backgroundColor: color }} />
  );
}
