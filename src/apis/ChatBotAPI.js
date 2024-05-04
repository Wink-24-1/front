import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

export async function getChatBot() {
    try {
      const response = await axios.get(
        `${REACT_APP_MAIN_URL}/api/chatbot?`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("List data에서 문제가 생겼습니다 - " + error);
    }
  }