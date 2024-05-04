import axios from "axios";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

async function getParking(category = 1) {
  try {
    const response = await axios.get(
      `${REACT_APP_MAIN_URL}/api/parking/category/${category}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Map API에서 문제가 생겼습니다 - " + error);
  }
}

export function getMAPLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        resolve({ latitude, longitude });
      },
      function (error) {
        reject(error);
      }
    );
  });
}

export default getParking;
