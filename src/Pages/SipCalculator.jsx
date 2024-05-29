import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Card } from "@material-tailwind/react";
import { propTypesMin } from "@material-tailwind/react/types/components/slider";
import stocks from "../assests/stocks.jpg";

function SipCalculator() {
  const [monthValue, setMonthValue] = useState(500);
  const [intrestValue, setIntrestValue] = useState(1);
  const [timeValue, setTimeValue] = useState(1);

  const [totalValue, setTotalValue] = useState(6060);
  const [investedAmount, setInvestedAmount] = useState(6000);

  const calculate = () => {
    console.log("values");
    console.log(timeValue);
    console.log(monthValue);
    console.log(intrestValue);

    let n = 12 * timeValue;
    let principal = monthValue * 12 * timeValue;
    let i = intrestValue / (100 * 12);

    let totalValueTemp = (monthValue * (Math.pow(i + 1, n) - 1) * (i + 1)) / i;
    setInvestedAmount(principal);
    setTotalValue(Math.round(totalValueTemp));
  };

  return (
    <div className=" pl-20 mt-20  flex flex-row justify-evenly">
      <div className="w-1/3">
        <div className="w-full  flex flex-col gap-7 ">
          <div className="w-full flex justify-between">
            <p>Monthly Investment</p>
            <p className="bg-blue-100 px-10 py-1 rounded-lg">{monthValue}</p>
          </div>
          <Slider
            size="large"
            value={monthValue}
            max={1000000}
            min={500}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event) => {
              setMonthValue(event.target.value);
            }}
          />{" "}
          <div className="w-full flex justify-between">
            <p>Expected Return(p.a)</p>
            <p className="bg-blue-100 px-10 py-1 rounded-lg">{intrestValue}</p>
          </div>
          <Slider
            size="large"
            max={30}
            min={1}
            value={intrestValue}
            aria-label="Small"
            onChange={(event) => {
              setIntrestValue(event.target.value);
            }}
          />{" "}
          <div className="w-full flex justify-between">
            <p>Time Period</p>
            <p className="bg-blue-100 px-10 py-1 rounded-lg">{timeValue}</p>
          </div>
          <Slider
            max={40}
            min={1}
            size="large"
            value={timeValue}
            aria-label="Small"
            onChange={(event) => {
              setTimeValue(event.target.value);
            }}
          />
        </div>

        <div className="w-full py-3 flex justify-center">
          <button
            onClick={() => calculate()}
            className="bg-blue-950 text-white py-1 px-2 rounded-md"
          >
            Calculate
          </button>
        </div>

        {/* display values */}
        <div className="w-full flex flex-col gap-3 pt-10 ">
          <div className="flex flex-row justify-between">
            <p>Total Value</p>
            <p className="text-gray-600">₹{totalValue}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Invested Amount</p>
            <p className="text-gray-600">₹{investedAmount}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Returns Gained</p>
            <p className="text-gray-600">₹{totalValue - investedAmount}</p>
          </div>
        </div>
      </div>

      <img src={stocks} alt="" className="w-1/2" />
    </div>
  );
}

export default SipCalculator;
