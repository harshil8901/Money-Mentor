import React from "react";
import mainImage from "../assests/main.jpg";

function MainPage() {
  return (
    <div className="h-full w-full flex flex-row justify-evenly">
      <div className="w-1/2 flex  flex-col mt-60 px-10">
        <p className="text-5xl  font-bold mb-10">
          Revolutionizing Personal Wealth Management
        </p>
        <p className="text-xl text-gray-600">
          Welcome to MoneyMentor, a comprehensive platform designed to simplify
          and enhance your personal finance management. Discover how our
          powerful features can help you achieve financial success.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img className=" w-full h-2/3 aspect-square" src={mainImage} alt="" />
      </div>
    </div>
  );
}

export default MainPage;
