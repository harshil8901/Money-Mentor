import axios from "axios";
const getData = async (value) => {
  const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/any",
    params: { Identifier: value },
    headers: {
      "X-RapidAPI-Key": "74f59112b2msh6b1f47a1ba7d023p19e07fjsnb0f2a479f1c6",
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

export default getData;
