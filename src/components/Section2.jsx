import React from "react";
import "../styles/Section2.css";
import arrowUp from "../images/arrow up.png";
import arrowDown from "../images/arrow down.png";

const Section2 = ({ data }) => {
  return (
    <div className="bg-white w-100 py-2">
      <div className="sec2 d-flex  flex-column flex-md-row gap-4 text-center text-md-start w-100 ">
        {data.map((datum) => {
          return (
            <div className=" flex-grow-1 px-3 border border-top-0 border-left-0 border-bottom-0 w-75 mx-auto">
              <div className="d-flex justify-content-center  flex-row gap-5 text-center text-md-start pt-4 ">
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
              <p className="px-3">{datum.price_usd}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
