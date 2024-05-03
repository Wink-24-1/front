import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

const responseEx = [
  {
    title: "클래식연주회",
    url: "http://cyblog.fly.dev",
    category: 1,
  },
  {
    title: "가수단콘",
    url: "http://cyblog.fly.dev",
    category: 2,
  },
  {
    title: "팝업스토어",
    url: "http://cyblog.fly.dev",
    category: 3,
  },
];

async function getList() {
  try {
    const response = await axios.get(
      `${REACT_APP_MAIN_URL}/api/event/category`,
      {
        withCredentials: true, // 이 옵션을 설정하여 쿠키와 인증 정보를 함께 보냄
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("List data에서 문제가 생겼습니다 - " + error);
  }
}

export default getList;
