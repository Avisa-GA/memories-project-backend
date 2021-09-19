import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/post";
dotenv.config();

const { PORT, DATABASE_URL } = process.env;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// cors setup
app.use(cors());

routes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
