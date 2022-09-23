// ========---======== < Axios > ========---======== //
import axios from "axios";

export const excuteFetchData = async (url) => {
  // ========---======== < RapidAPI-Options > ========---======== //
  const options = {
    method: "GET",
    url,
    headers: {
      "X-RapidAPI-Key": process.env.React_App_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  // ========---======== < Fetch-Function > ========---======== //
  const data = await axios.request(options);
  return data;
};

export const excuteFetchVideos = async (url) => {
  // ========---======== < RapidAPI-Options > ========---======== //
  const options = {
    method: "GET",
    url,
    headers: {
      "X-RapidAPI-Key": process.env.React_App_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  }; // ========---======== < Fetch-Function > ========---======== //
  
  const data = await axios.request(options);
  return data;
};
