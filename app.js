require('dotenv').config()
let express = require("express")
let path = require("path")
let routes = require("./app/routes")

let app = express()

app.set("port", process.env.PORT || 8000)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(routes)

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"))
})