require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// here i am require cors packege for allow to access all request from front end server 
var cors = require('cors')
// console.log(process.env.DB_CONNECTION_PASS )
// it is work as a third party body parser
app.use(express.json());
// here i am using cors (Cross-Origin Resource Sharing) and allow to access all server by using * 
app.use(cors({
  origin : "*"
}))
// connection file require here
require("./connection/connectionDb");
// require books routes  file here
const bookroute = require("./routes/book-routes/book-routes");
// and we have to use router here so you need to use  usemethod
app.use(bookroute);
app.listen(port, () => {
  console.log("server activated on port 8080...............");
});
