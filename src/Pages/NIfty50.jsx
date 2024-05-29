import React, { useEffect, useState } from "react";
import getNiftyData from "../functions/NiftyAPI";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import {
  List,
  ListItem,
  Card,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";

import getData from "../functions/getDatas";

function NIfty50() {
  const [result, setResult] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 300,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    (async function () {
      try {
        temp = await getNiftyData();
        setResult(temp);
        console.log(temp);
      } catch (error) {
        alert("There was a network error");
      }
    })();
  }, []);
  let temp = null;

  const getInfo = async (data) => {
    let temp = await getData(data.identifier);
    console.log(temp[0]);
    setModalData(temp[0]);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="h-screen w-full flex flex-col p-10  ">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col rounded-lg">
          <p className="text-3xl font-bold mb-6">Key stats :-</p>
          <div className="w-full h-full flex flex-row ">
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly ">
              <p className="font-bold">Day High</p>
              <p>{modalData.dayHigh}</p>
            </div>
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly ">
              <p className="font-bold">Day Low</p>
              <p>{modalData.dayLow}</p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly ">
              <p className="font-bold">Volume</p>
              <p>{modalData.totalTradedVolume}</p>
            </div>
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly ">
              <p className="font-bold">Open</p>
              <p>{modalData.open}</p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row ">
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly">
              <p className="font-bold">Year High</p>
              <p>{modalData.yearHigh}</p>
            </div>
            <div className="w-1/2 flex h-1/3 flex flex-row justify-evenly">
              <p className="font-bold">Year Low</p>
              <p>{modalData.yearLow}</p>
            </div>
          </div>
        </Box>
      </Modal>
      {result ? (
        <div>
          <div className="w-full px-4 pb-5 flex flex-row">
            <div className="w-1/2 ">
              <p className="text-2xl font-extrabold text-black-900">
                ₹ {result[0].lastPrice}
              </p>
              <p className="mt-2 text-red-500 text-sm pl-2">
                {result[0].change} ({result[0].pChange})
              </p>
            </div>

            <div className="w-1/2 h-full flex flex-row gap-4">
              <div className="w-1/4 text-center bg-gray-300 rounded-md">
                <p>{result[0].dayHigh}</p>
                <p>DH</p>
              </div>
              <div className="w-1/4 text-center bg-gray-300 rounded-md">
                <p>{result[0].dayLow}</p>
                <p>DL</p>
              </div>
              <div
                className={`w-1/4 text-center rounded-md ${
                  result[0].perChange30d > 0 ? "bg-green-200" : "bg-red-200"
                }`}
              >
                <p
                  className={
                    result[0].perChange30d > 0
                      ? "text-green-700"
                      : "text-red-600"
                  }
                >
                  {result[0].perChange30d}
                </p>
                <p
                  className={
                    result[0].perChange30d > 0
                      ? "text-green-700"
                      : "text-red-600"
                  }
                >
                  1M
                </p>
              </div>
              <div
                className={`w-1/4 text-center rounded-md ${
                  result[0].perChange365d > 0 ? "bg-green-200" : "bg-red-200"
                }`}
              >
                <p
                  className={
                    result[0].perChange365d > 0
                      ? "text-green-700"
                      : "text-red-600"
                  }
                >
                  {result[0].perChange365d}
                </p>
                <p
                  className={
                    result[0].perChange365d > 0
                      ? "text-green-700"
                      : "text-red-600"
                  }
                >
                  1Y
                </p>
              </div>
            </div>
          </div>

          <Card className="w-full h-full bg-gray-100 shadow-xl p-4 gap-3 rounded-xl">
            <List className="overflow-y-auto overflow-hidden">
              <ListItem className="flex justify-between p-5">
                <ListItemPrefix className="flex flex-row">
                  <p className="text-black font-bold">Name</p>
                </ListItemPrefix>
                <ListItemSuffix className="flex w-1/4 flex-row justify-between">
                  <p className="text-black font-bold">Price</p>
                  <p className="text-black font-bold">1M</p>
                  <p className="text-black font-bold">1D</p>
                </ListItemSuffix>
              </ListItem>

              {result.slice(1).map((data) => (
                <ListItem
                  className="flex justify-between p-5"
                  key={data.symbol}
                  onClick={() => {
                    getInfo(data);
                  }}
                >
                  <ListItemPrefix className="flex flex-row">
                    <p className="text-lg">{data.symbol}</p>
                  </ListItemPrefix>
                  <ListItemSuffix className="flex w-1/4 flex-row justify-between">
                    <p className="text-gray-600">₹ {data.lastPrice}</p>
                    <p
                      className={
                        data.perChange30d > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {data.perChange30d}%
                    </p>
                    <p
                      className={
                        data.pChange > 0 ? "text-green-500" : "text-red-500"
                      }
                    >
                      {data.pChange}%
                    </p>
                  </ListItemSuffix>
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default NIfty50;
