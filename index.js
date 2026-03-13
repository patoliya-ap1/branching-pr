import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to express server" });
});

app.get("/user", (req, res) => {
  res.status(200).json({ message: "user route" });
});

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
