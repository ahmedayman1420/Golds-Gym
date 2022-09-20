// ========---======== < Axios > ========---======== //
import axios from "axios";

// ========---======== < RapidAPI-Options > ========---======== //
const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": process.env.React_App_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

// ========---======== < Fetch-Function > ========---======== //
export const fetchData = async () => {
  const data = await axios.request(options);
  console.log(data);
  return data;
};
