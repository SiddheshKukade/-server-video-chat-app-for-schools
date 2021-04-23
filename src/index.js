const express = require("express");
require("./db/connection");
const app = express();
const Ranking = require("./models/participantSchema");
const router = require("./routers/router");
// middlewares
app.use(express.json());
app.use(router);
// setting port
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`server is up and running at ${PORT}`);
});
