import React from "react";
import ProductCatogries from "./ProductCatogries";
import "./call.css";
import Callcolor from "../colorpicker/Callcolor";
import Hr from "../hrtag/Hr";

export default function Callcatogriesproduct() {
  const cardData = [
    {
      heading: {
        title: "Categories",
        para: "Reset",
      },
      information: [
        { heading: "All Categories", paragraph: "10" },
        { heading: "Mobile", paragraph: "5" },
        { heading: "Head Phones", paragraph: "5" },
        { heading: "Other", paragraph: "5" },
      ],
    },
    {
      heading: {
        title: "0 Selected",
        para: "Reset",
      },
      information: [
        { heading: "Laptops", paragraph: "8" },
        { heading: "Tablets", paragraph: "6" },
      ],
    },
    {
      heading: {
        title: "0 Selected",
        para: "Reset",
      },
      information: [
        { heading: "Laptops", paragraph: "8" },
        { heading: "Tablets", paragraph: "6" },
      ],
    },
    {
      heading: {
        title: "0 Selected",
        para: "Reset",
      },
      information: [{ heading: "Laptops", paragraph: "8" }],
    },
    {
      heading: {
        title: "0 Selected",
        para: "Reset",
      },
      information: [{ heading: "Laptops", paragraph: "8" }],
    },
    {
      heading: {
        title: "0 Selected",
        para: "Reset",
      },
      information: [
        { heading: "M", paragraph: "8" },
        { heading: "S", paragraph: "5" },
        { heading: "X", paragraph: "10" },
        { heading: "XX", paragraph: "10" },
      ],
    },
  ];

  return (
    <>
      <div className="mainlll  w-96 overflow-auto">
        <div className="sett">
          <ProductCatogries
            heading={cardData[0].heading}
            data={cardData[0].information}
          />
        </div>
        <Hr />

        <h2
          style={{
            textAlign: "start",
            marginLeft: "13px",
            color: "rgba(0, 63, 98, 1)",
            marginTop: "13px",
          }}
        >
          Availability
        </h2>

        <div className="sett mt-3">
          <ProductCatogries
            heading={cardData[1].heading}
            data={cardData[1].information}
          />
        </div>
        <Hr />

        <h2
          style={{
            textAlign: "start",
            marginLeft: "13px",
            color: "rgba(0, 63, 98, 1)",
            marginTop: "13px",
          }}
        >
          Product type
        </h2>
        <div className="sett mt-3">
          <ProductCatogries
            heading={cardData[2].heading}
            data={cardData[2].information}
          />
        </div>
        <Hr />
        <h2
          style={{
            textAlign: "start",
            marginLeft: "13px",
            color: "rgba(0, 63, 98, 1)",
            marginTop: "13px",
          }}
        >
          Brand
        </h2>
        <div className="sett mt-3">
          <ProductCatogries
            heading={cardData[3].heading}
            data={cardData[3].information}
          />
        </div>
        <Hr />
        <h2
          style={{
            textAlign: "start",
            marginLeft: "13px",
            color: "rgba(0, 63, 98, 1)",
            marginTop: "13px",
          }}
        >
          Color
        </h2>

        <Callcolor />
        <Hr />
        <h2
          style={{
            textAlign: "start",
            marginLeft: "13px",
            color: "rgba(0, 63, 98, 1)",
            marginTop: "13px",
          }}
        >
          Size
        </h2>
        <div className="sett mt-3">
          <ProductCatogries
            heading={cardData[5].heading} 
            data={cardData[5].information} 
          />
        </div>
        <Hr />
      </div>
    </>
  );
}
