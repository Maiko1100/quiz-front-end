import axios from "axios";

export let hostUrl;
const hostName = window.location.hostname;
if (hostName === "localhost") {
  hostUrl = "http://localhost:5000/";
} else {
  hostUrl = "http://assignment.maikokuipers.nl/";
}

const defaultConfig = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  baseURL: hostUrl,
});

export default defaultConfig;