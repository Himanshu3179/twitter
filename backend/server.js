require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoute");
const likeRoutes = require("./routes/likeRoute");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// connect to db 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
