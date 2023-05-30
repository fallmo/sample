const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome to app!\nInstance '${process.env.HOSTNAME}'\n`);
});

app.get("/simulate-crash", (req, res) => {
  res.send("Simulating Server Crash!\n");
  console.log(`Oops Error. something went wrong! Crashing...\n`);
  process.exit(1);
});

app.get("/version", (req, res) => {
  res.send("App running version 1.0\n");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Application running on 0.0.0.0:${PORT}\n`));
