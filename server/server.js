const connectDB = require("./config/db");
const express = require("express");
const app = express();

connectDB();
app.use(express.urlencoded({ extended: true }));

app.use("/profile", require("./routes/profile"));

app.listen(4000, () => {
  console.log("Server listening on 4000");
});
