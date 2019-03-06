const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname,"../")))
const cartsdata = require("./carts");
const classify =  require("./classify");
const ballList = require("./ballList");
const swiper = require("./swiper");

app.all("*",function(req,res,next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options') {
    res.send(200);  //让options尝试请求快速结束
  } else {
    next();
  }
})

app.use("/apis/carts",(req,res)=>{
  res.json(cartsdata)
})
app.use("/apis/classify",(req,res)=>{
  res.json(classify)
})
app.use("/apis/ballList",(req,res)=>{
  res.json(ballList)
})
app.use("/apis/swiper",(req,res)=>{
  res.json(swiper)
})

app.use("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../","index.html"))
})

app.listen(4000,()=>{
  console.log("server is ready on port 4000")
})
