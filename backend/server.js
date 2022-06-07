const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
//const users = require("./data/users");
const userRoutes = require("./routes/userRoutes");
const instituteRoutes = require("./routes/instituteRoutes");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/institutes", instituteRoutes);

// --------------- Deployment ---------------

__dirName = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// --------------- Deployment ---------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server On Port ${PORT}`));
