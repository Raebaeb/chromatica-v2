const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT} 🚀`));

app.get("/", (req, res) => {
  res.status(200).send("You are on the homepage");
});

