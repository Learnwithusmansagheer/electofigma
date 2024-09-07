import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import "./information.css";
export default function Information() {
  return (
    <div
      className="information " >
      <div className="home-heading ">
        <h1>Home</h1>
        <PiGreaterThanBold />
      </div>
      <div className="homecard ">
        <h1>All </h1>
        <PiGreaterThanBold />
      </div>
    </div>
  );
}
