require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.options("*", cors());

const characters = {
  1: {
    name: "Jacob Harth",
    description:
      "Creator of the Dark Web, Owner of Digital Den, and tech genius",
    external_url: `${process.env.BASE_URL}/card/1`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
  2: {
    name: "Dexx Martin",
    description: "Triple OG and also a grown ass man",
    external_url: `${process.env.BASE_URL}/card/2`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
  3: {
    name: "Gary Benson",
    description: "The rent-a-cop of all rent-a-cops",
    external_url: `${process.env.BASE_URL}/card/3`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
  4: {
    name: "Jackie Snow",
    description: "Pretty much Jacob Harth's biggest fan",
    external_url: `${process.env.BASE_URL}/card/4`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
  5: {
    name: "Lang Buddha",
    description: "Owner of Rooster's Rest",
    external_url: `${process.env.BASE_URL}/card/5`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
  6: {
    name: "Mel Rickenbacker",
    description: "Don't call him an old man",
    external_url: `${process.env.BASE_URL}/card/6`,
    image:
      "https://lh3.googleusercontent.com/CLEY65DQQ-rxd5VGLazPFkXHk_nzweYTECfSJBOWwLVc0fHmuM08FKjMQvYKMQOTuqLQOoDXbUEtS4c8CCFgtWQrbX6FR-pN6bfZ-Ns=s0?.jpg",
  },
};

app.get("/", (req, res) => {
  return res.send("NoPixel Characters API v" + process.env.npm_package_version);
});

app.get("/c/:tokenId", (req, res) => {
  return res.json({ ...characters[req.params.tokenId] });
});

app.get("/c", (req, res) => {
  return res.json(characters);
});

app.listen(process.env.PORT, () =>
  console.log(`API listening on port ${process.env.PORT}!`)
);
