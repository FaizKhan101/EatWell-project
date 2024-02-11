const path = require("path")
const fs = require("fs")

const express = require("express")

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.get("/restaurants", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "restaurants.html"))
})

app.get("/recommend", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "recommend.html"))
})

app.post("/recommend", (req, res, next) => {
    const restaurant = req.body

    const filePath = path.join(__dirname, "data", "restaurant.json")

    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData)

    storedRestaurants.push(restaurant)
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants))

    res.redirect("/confirm")
})

app.get("/about", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "about.html"))
})

app.get("/confirm", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "confirm.html"))
})

app.listen(3000, () => console.log("Server starts"))