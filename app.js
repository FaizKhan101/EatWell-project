const express = require("express");

const defaultRoutes = require("./routes/default")
const restaurantRoutes = require("./routes/restaurant")
const errorRoutes = require("./routes/error")

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(defaultRoutes)
app.use(restaurantRoutes)
app.use(errorRoutes)

app.listen(3000, () => console.log("Server starts"));
