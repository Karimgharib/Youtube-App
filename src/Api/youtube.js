import axios from "axios";

const KEY = "AIzaSyBJVlpGZezzBpZU_XAH0U2kU6D6UZCRTgg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
