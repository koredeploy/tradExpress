import React from "react";
import "../styles/Section2.css";
import arrowUp from "../images/arrow up.png";
import arrowDown from "../images/arrow down.png";

const Section2 = ({ data }) => {
  return (
    <div className="bg-white w-100 py-2">
      <marquee behavior="" direction="">
        <div className="sec2 d-flex flex-column flex-md-row gap-4 text-center text-md-start w-100">
          {data.map((datum) => {
            return (
              <div className=" flex-grow-1">
                <div className=" d-md-flex gap-4 text-center text-md-start ">
                  <p>{datum.symbol}</p>
                  <p>{datum.percent_change_24h}</p>
                  <span>
                    {datum.percent_change_24h.startsWith("-") ? (
                      <img src={arrowDown} alt="" />
                    ) : (
                      <img src={arrowUp} alt="" />
                    )}
                  </span>
                </div>
                <p>{datum.price_usd}</p>
              </div>
            );
          })}
        </div>
      </marquee>
    </div>
  );
};

export default Section2;
