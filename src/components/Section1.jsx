import React from "react";
import "../styles/Section1.css";
import eclipse from "../images/Group 127.png";
import { Link } from "react-router-dom";
import Appstore from "../images/Group 68@2x.png";
import playstore from "../images/Group 69.png";

const Section1 = () => {
  return (
    <div className="sec1-body">
      <div className="sec1 py-4 container">
        <img className="hero-img" src={eclipse} alt="" />
        <div className="info pt-2 mx-auto">
          <h1
            id="heading"
            className="text-white text-center mx-auto pt-4 w-100"
          >
            Buy Sell and Manage your crypto on tradExpress
          </h1>
          <p className="w-75 mx-auto text-white text-center text my-3">
            Easily trade cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN
          </p>
          <Link
            className="sec1-btn my-2 d-block text-center w-50 mx-auto text-purple text-decoration-none py-2  text-center btn border-white my-1 bg-white"
            to="/IndividualBusiness"
          >
            Get Started
          </Link>
          <div className="d-flex justify-content-center download-links w-75 mx-auto  gap-2 my-3 download ">
            <Link>
              <img className="w-100 mobile" src={Appstore} alt="" />{" "}
            </Link>
            <Link>
              <img className="w-100 mobile" src={playstore} alt="" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
