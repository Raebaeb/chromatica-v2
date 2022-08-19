require("dotenv").config();
const app = require("express")();
const PORT = process.env.PORT || 8080;

const db = require("./config/database");

// Test Connection
db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error connecting: " + err));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT} 🚀`));

app.get("/", (req, res) => {
  res.status(200).send("You are on the homepage");
});

app.use(function (req, res) {
  res.status(404).send("Cant find that!");
});

module.exports = app;
