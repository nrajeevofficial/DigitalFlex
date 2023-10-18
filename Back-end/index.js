const express = require("express");
const cors = require("cors");
const router = require("./routes/routing");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/api", router);
require("./connection/connection");
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
