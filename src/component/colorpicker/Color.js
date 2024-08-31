import React from "react";

export default function Color({ title, para, colors }) {
  return (
    <>
      <div>
        <div className="ss flex w-80 justify-between px-3 py-1">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
        <div className="colors-container flex ml-2 gap-5">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{
                display:'flex',
                ...color,
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                margin: "5px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
