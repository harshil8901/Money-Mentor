import axios from "axios";

const getNiftyData = async () => {
  const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/price",
    params: {
      Indices: "NIFTY 50",
    },
    headers: {
      "X-RapidAPI-Key": "2b68cd9de2msh1a368df4157098dp15663cjsn82c930647c7a",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getNiftyData;
