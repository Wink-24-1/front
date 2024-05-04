import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

export async function getList() {
  try {
    const response = await axios.get(
      `${REACT_APP_MAIN_URL}/api/event/category`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("List data에서 문제가 생겼습니다 - " + error);
  }
}

export async function getContentsList(data) {
  try {
    console.log(data);
    const response = await axios.get(
      `${REACT_APP_MAIN_URL}/api/event/category/${data}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("List data에서 문제가 생겼습니다 - " + error);
  }
}

export default {
  getList,
  getContentsList,
};
