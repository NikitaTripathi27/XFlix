const app =require('./app')
const mongoose = require("mongoose");
const port = 8082;
 const url = "mongodb+srv://nikita2399020:8anrV73xWNMtaOy0@xflix.dzktoxy.mongodb.net/?retryWrites=true&w=majority";
//const url = "mongodb+srv://nikita2399020:8anrV73xWNMtaOy0@xflix.dzktoxy.mongodb.net/?retryWrites=true&w=majority"
const config = require('./config/config')
mongoose
  .connect(url)
  .then(() => {
    console.log("connected successfully", url);
  })
  .catch((error) => {
    console.log("login failed", error);
  });

app.listen(port, () => {
  console.log("connected on port",port);
});


