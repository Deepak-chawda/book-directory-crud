require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// console.log(process.env.DB_CONNECTION_PASS )
// it is work as a third party body parser
app.use(express.json());
// connection file require here
require("./connection/connectionDb");
// require books routes  file here
const bookroute = require("./routes/book-routes/book-routes");
// and we have to use router here so you need to use  usemethod
app.use(bookroute);
app.listen(port, () => {
  console.log("server activated on port 8080...............");
});
