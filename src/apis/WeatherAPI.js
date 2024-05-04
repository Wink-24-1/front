import axios from "axios";
import { useState } from "react";

const REACT_APP_GET_WEATHER_KEY = process.env.REACT_APP_GET_WEATHER_KEY;

function getDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let date = today.getDate().toString().padStart(2, "0");

  return `${year + month + date}`;
}

function getBaseTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  // 현재 시간을 30분 단위로 반올림
  if (minutes < 30) {
    hours--;
    minutes = "00";
  } else {
    hours--;
    minutes = "30";
  }

  // 시간을 두 자리 숫자로 변환하고, 문자열로 반환
  return `${hours.toString().padStart(2, "0")}${minutes}`;
}

function getClosestFcstTime(data) {
  const currentTime = getBaseTime();
  let closestTimeDiff = Infinity;
  let closestFcstTime = null;

  data.forEach((item) => {
    const timeDiff = Math.abs(Number(item.fcstTime) - Number(currentTime));
    if (timeDiff < closestTimeDiff) {
      closestTimeDiff = timeDiff;
      closestFcstTime = item.fcstTime;
    }
  });

  return closestFcstTime;
}

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const latitude = parseInt(pos.coords.latitude);
        const longitude = parseInt(pos.coords.longitude);
        resolve({ latitude, longitude });
      },
      function (error) {
        reject(error);
      }
    );
  });
}

// 사용할 카테고리 리스트
const usedCategories = ["PTY", "SKY", "T1H"]; // 여기에 사용할 카테고리를 추가하십시오.

// 카테고리별로 데이터를 담을 객체 생성
const categoryData = {
  PTY: [],
  SKY: [],
  T1H: [],
};
async function getWeather() {
  const returnData = {
    PTY: [],
    SKY: [],
    T1H: [],
  };
  try {
    const date = getDate();
    const time = getBaseTime();
    const { latitude, longitude } = await getLocation();

    const response = await axios.get(
      `${
        new URL(window.location.href).protocol
      }//apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`,
      {
        params: {
          serviceKey: REACT_APP_GET_WEATHER_KEY,
          numOfRows: 1000,
          pageNo: 1,
          base_date: date,
          base_time: time,
          nx: latitude,
          ny: longitude,
          dataType: "JSON",
        },
      }
    );
    console.log("Weather.data.통신.성공적");
    const responseData = response.data.response.body.items.item;

    // response에서 각 항목을 카테고리에 따라 분류하여 저장
    responseData.forEach((item) => {
      const category = item.category;
      if (usedCategories.includes(category)) {
        categoryData[category].push(item);
      }
    });

    // console.log(categoryData.PTY[0]);
    // console.log(categoryData.SKY[0]);
    // console.log(categoryData.T1H[0]);
    returnData.PTY = categoryData.PTY[0];
    returnData.SKY = categoryData.SKY[0];
    returnData.T1H = categoryData.T1H[0];

    return returnData;
  } catch (error) {
    console.error(error);
    throw new Error("Weather data에서 문제가 생겼습니다");
  }
}

export { getWeather };
