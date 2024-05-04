import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

export async function getChatBot(msgs) {
  try {
    const response = await axios.post(`${REACT_APP_MAIN_URL}/api/chat`, {
      messages: [msgs[1]],
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("ChatBot API에서 문제가 생겼습니다 - " + error);
  }
}
