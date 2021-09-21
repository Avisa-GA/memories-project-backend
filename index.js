import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/post";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
require("dotenv").config();

const { PORT, DATABASE_URL } = process.env;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send("Welcome to Memories App 👩🏻‍💻");
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
