// import axios from "axios";
// const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

let likeCount = 0;

app.use(bodyParser.json());

// 좋아요 버튼을 누를 때마다 좋아요 수를 증가시키는 엔드포인트
app.post("/like", (req, res) => {
  likeCount++;
  res.json({ likeCount });
});

// 현재 좋아요 수를 반환하는 엔드포인트
app.get("/likeCount", (req, res) => {
  res.json({ likeCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// async function
