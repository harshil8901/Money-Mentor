import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import mutualData from "../data/mutual";
import findMutualFund from "../functions/mutualFundFind";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
  ListItemSuffix,
} from "@material-tailwind/react";

function MutualFund() {
  const [value, setValue] = React.useState(10);
  const [expectedReturn, setExpectedReturn] = React.useState(null);
  const [moneyInvested, setMoneyInvested] = React.useState(null);
  const [timePeriod, setTimePeriod] = React.useState(null);
  const [riskValue, setRiskValue] = React.useState(null);
  const [typeValue, setTypeValue] = React.useState(null);

  const [result, setResult] = React.useState(null);
  let temp = null;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const findData = async () => {
    switch (value) {
      case 10:
        temp = await findMutualFund(value, expectedReturn);
        setResult(temp);
        break;

      case 20:
        temp = await findMutualFund(value, timePeriod);
        setResult(temp);
        break;
      case 30:
        temp = await findMutualFund(value, riskValue);
        console.log(riskValue);
        setResult(temp);
        break;
      case 40:
        temp = await findMutualFund(value, typeValue);
        console.log(typeValue);
        setResult(temp);
        break;

      default:
        result = null;
        break;
    }
  };
  return (
    <div
      className="w-full mt-40 h-1/2 flex flex-row 
  justify-evenly"
    >
      <div className="w-1/3  flex flex-col gap-5">
        <div className="w-full px-1 flex justify-between flex-row text-align-baseline">
          <p className="py-3">Recommend By :-</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Select"
              onChange={handleChange}
            >
              <MenuItem value={10}>Return</MenuItem>
              <MenuItem value={20}>Investment Period</MenuItem>
              <MenuItem value={30}>Risk</MenuItem>
              <MenuItem value={40}>Type</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField label="Goal" variant="outlined" />
        <TextField
          onChange={(event) => setMoneyInvested(event.target.value)}
          variant="outlined"
          value={moneyInvested}
          label="Money Invested"
        />

        {(() => {
          switch (value) {
            case 10:
              return (
                <TextField
                  label="Expected Return(%)"
                  onChange={(event) => setExpectedReturn(event.target.value)}
                  variant="filled"
                  value={expectedReturn}
                />
              );
              break;
            case 20:
              return (
                <TextField
                  value={timePeriod}
                  onChange={(event) => setTimePeriod(event.target.value)}
                  label="Investment Period(Months)"
                  variant="filled"
                />
              );
              break;
            case 30:
              return (
                <FormControl
                  onChange={(event) => setRiskValue(event.target.value)}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Risk
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="LOW"
                      control={<Radio />}
                      label="Low"
                    />
                    <FormControlLabel
                      value="HIGH"
                      control={<Radio />}
                      label="High"
                    />
                  </RadioGroup>
                </FormControl>
              );
              break;
            case 40:
              return (
                <FormControl
                  onChange={(event) => setTypeValue(event.target.value)}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="DEBT"
                      control={<Radio />}
                      label="Debt"
                    />
                    <FormControlLabel
                      value="EQUITY"
                      control={<Radio />}
                      label="Equity"
                    />

                    <FormControlLabel
                      value="HYBRID"
                      control={<Radio />}
                      label="Hybrid"
                    />
                  </RadioGroup>
                </FormControl>
              );
              break;
            default:
              return <div></div>;
              break;
          }
        })()}
        <Button
          variant="outlined"
          onClick={() => findData()}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
      {/* Mutual Funds cards */}
      <div className="w-1/3 h-full overflow-hidden shadow-lg rounded-xl flex flex-col overflow-y-auto thisistest">
        {result != null ? (
          <List className="w-100 h-full flex flex-col rounded-md ">
            {result.map((data) => (
              <ListItem
                className="w-100 flex border-0 flex-row px-2 py-3 justify-between"
                key={data.name}
                style={{
                  height: "5000px",
                }}
              >
                <ListItemPrefix>{data.name}</ListItemPrefix>
                <ListItemSuffix className="text-green-500">
                  {data.return_percentage_last_year}%
                </ListItemSuffix>
              </ListItem>
            ))}
          </List>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-xl">No data to show</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MutualFund;
