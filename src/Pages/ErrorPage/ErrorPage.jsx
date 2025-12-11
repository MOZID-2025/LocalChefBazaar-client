import React from "react";
import errorImg from "../../assets/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center mb-10 mt-10 bg-white rounded-2xl">
      <img className="mx-auto" src={errorImg} alt="" />
      <Link to="/">
        <button className="bg-[#CAEB66] py-4 px-6 rounded-xl font-bold cursor-pointer">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
