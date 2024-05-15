// routes/faceSwap.js
import express from "express";
import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

router.post("/", async (req, res) => {
  try {
    const { swap_image, target_image } = req.body;

    const input = {
      swap_image: swap_image,
      target_image: target_image,
    };

    const output = await replicate.run(
      "omniedgeio/face-swap:c2d783366e8d32e6e82c40682fab6b4c23b9c6eff2692c0cf7585fc16c238cfe",
      { input }
    );

    res.json({ output });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

export default router;
