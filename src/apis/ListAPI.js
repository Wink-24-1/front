import axios from "axios";

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
    // const response = await axios.get(`http://localhost:8080/list`, {
    //   params: {
    //     numOfRows: 16,
    //     pageNo: 1,
    //   },
    // });
    // return response;

    
    return responseEx;
  } catch (error) {
    console.error(error);
    throw new Error("List data에서 문제가 생겼습니다");
  }
}

export default getList;
