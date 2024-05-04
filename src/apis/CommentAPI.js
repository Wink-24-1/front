import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

async function sendRequest(method, url, data) {
  try {
    let response;

    if (method === "GET") {
      response = await axios.get(url, { params: data });
    } else if (method === "POST") {
      response = await axios.post(url, data);
    } else if (method === "PUT") {
      response = await axios.post(url, data);
    } else if (method === "DELETE") {
      response = await axios.post(url, data);
    } else {
      throw new Error("HTTP Method Error");
    }

    return response;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
}

async function PWCheckAPI(state, commentID, password) {
  try {
    let response;

    if (state === 1) {
      response = await sendRequest("DELETE", REACT_APP_MAIN_URL + "/comment", {
        commentID: commentID,
        password: password,
      });
    } else if (state === 0) {
      response = await sendRequest("PUT", REACT_APP_MAIN_URL + "/comment", {
        commentID: commentID,
        password: password,
      });
    } else {
      console.log("state error");
    }

    return response;
  } catch (error) {
    console.error("PWCheckAPI error:", error);
    throw error;
  }
}
export default PWCheckAPI;
