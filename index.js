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


app.get("/fibonacci", async (req, res) => {
  function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
	}

	const result = fibonacci(Math.ceil(Math.random(0,1)*100)));

	
	res.rend(`Result ${result}`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Application running on 0.0.0.0:${PORT}\n`));
