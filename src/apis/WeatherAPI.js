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

async function getWeather() {
  
  try {
    const date = getDate();
    const time = getBaseTime();
    const { latitude, longitude } = await getLocation();

    const response = await axios.get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`,
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
    console.log('Weather.data.통신.성공적')
    console.log(response.data.response.body.items.item)

    const filteredData = response.data.response.body.items.item.filter(item => item.category === 'SKY');

    return filteredData[0];

  } catch (error) {
    console.error(error);
    throw new Error("Weather data에서 문제가 생겼습니다");
  }
}

export { getWeather };
