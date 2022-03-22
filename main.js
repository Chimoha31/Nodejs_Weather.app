const request = require("request");
const dotenv = require("dotenv").config();
const argument = process.argv[2];

const options = {
  url: `http://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
  method: "GET",
  json: true,
}

// request()の第一引数には上記のapiを、第二引数には第一引数の取得が完了した時の操作を書く。
request(options, (error, res, body) => {
  console.log(`Current tempreture in ${argument} is ${body.main.temp} degree`);
});