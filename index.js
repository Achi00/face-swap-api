import express from "express";
import dotenv from "dotenv";
import faceSwapRouter from "./route/SwapRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/v1/face-swap", faceSwapRouter);

app.get("/", (req, res) => {
  res.send(process.env.REPLICATE_API_TOKEN);
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
