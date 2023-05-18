import express from "express";
import cors from "cors";

const allowedOrigins = ["http://localhost:4005"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(options));

export default app;
