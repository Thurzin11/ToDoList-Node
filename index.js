const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//ROTA
app.use(routes);

app.listen(port, () =>
  console.log(`O servidor está rodando em http://localhost:${port}`)
);
