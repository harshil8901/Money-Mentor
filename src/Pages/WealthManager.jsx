import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import wealth_img from "../assests/wealth-img.png";

function WealthManager() {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

  const [assets, setAssets] = useState();
  const [liability, setLiability] = useState();
  const [emergency, setEmergency] = useState();
  const [value, setValue] = useState(true);

  const [eflag, setEflag] = useState(false);
  const [sflag, setSflag] = useState(false);
  const [fundFlag, setFundFlag] = useState(false);

  const calculate = () => {
    if (expense >= 0.8 * income) {
      setEflag(true);
    } else {
      setEflag(false);
    }

    if (income - expense > 0.2 * income) {
      setSflag(false);
    } else {
      setSflag(true);
    }

    if (3 * expense < emergency && emergency < 6 * expense) {
      setFundFlag(false);
    } else if (emergency > 6 * expense) {
      setFundFlag(true);
    } else {
      setFundFlag(true);
    }

    setValue(false);
  };
  return (
    <div className="w-full h-full flex flex-row ">
      {value && (
        <div className="w-1/2  h-1/2 gap-5 px-20  mt-40 flex flex-col">
          <TextField
            label="Income"
            variant="outlined"
            onChange={(event) => setIncome(event.target.value)}
            value={income}
          />
          <TextField
            label="Expense"
            variant="outlined"
            onChange={(event) => setExpense(event.target.value)}
            value={expense}
          />
          <TextField
            label="Assets"
            variant="outlined"
            onChange={(event) => setAssets(event.target.value)}
            value={assets}
          />
          <TextField
            label="Liability"
            variant="outlined"
            onChange={(event) => setLiability(event.target.value)}
            value={liability}
          />
          <TextField
            label="Emergency Funds"
            variant="outlined"
            onChange={(event) => setEmergency(event.target.value)}
            value={emergency}
          />
          <Button
            variant="outlined"
            onClick={() => calculate()}
            startIcon={<SearchIcon />}
          >
            Suggest
          </Button>
        </div>
      )}
      {!value && (
        <div className="w-1/2  h-1/2 gap-5 px-20  mt-40 flex flex-col">
          <p className="text-3xl">
            NetWorth :-{" "}
            <span
              className={
                assets - liability > 0 ? "text-green-500" : "text-red-500"
              }
            >
              ₹ {assets - liability}
            </span>
          </p>
          {eflag && (
            <p>
              Your Expense Exceeds your Income Expense must be less than 80% of
              Income
            </p>
          )}
          {!eflag && (
            <p>
              Congrats your expenses are in limit Keep in mind that expense must
              always be within 80% of income.
            </p>
          )}

          {sflag && (
            <p>
              Your Savings should be 20% of income and we suggest to invest 10%
              in savings account and 10% in Mutual Funds
            </p>
          )}
          {!sflag && <p>Your Savings are on track</p>}

          {fundFlag && (
            <p>
              Your emergency funds are not managed properly emergency funds must
              be between 3 to 6 time of you expense
            </p>
          )}
          {!fundFlag && <p>Congrats your Emergency funds are managed.</p>}
          <Button variant="outlined" onClick={() => setValue(true)}>
            Go Back
          </Button>
        </div>
      )}

      <div className="w-1/2">
        <img src={wealth_img} alt="" />
      </div>
    </div>
  );
}

export default WealthManager;
