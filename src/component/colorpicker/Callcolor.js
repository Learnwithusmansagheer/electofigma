import React from "react";
import Color from "../../component/colorpicker/Color";

export default function Callcolor() {
  const colors = [
    {
      backgroundColor: "red",
    },
    {
      backgroundColor: "blue",
    },
    {
      backgroundColor: "green",
    },
    {
        backgroundColor: "green",
      },
      {
        backgroundColor: "red",
      },
      {
        backgroundColor: "blue",
      },
      {
        backgroundColor: "green",
      },
      {
          backgroundColor: "green",
        },
    // Add more colors here as needed
  ];

  return (
    <div className=" flex">
      <Color
        title="0 selected"
        para="Reset"
        colors={colors}
      />
    </div>
  );
}
