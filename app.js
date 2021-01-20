require('dotenv').config()
let express = require("express")
let path = require("path")
let routes = require("./app/routes")
let api = require("./app/helpers/api")
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("port", process.env.PORT || 8000)
app.set("views", path.join(__dirname, "app/views"))
app.set("view engine", "ejs")
app.use(routes)

api.generateCode()
    .then(codeResponse => {
        process.env.CODE = codeResponse.data.code
        return api.generateAccessToken()
    })
    .then(tokenResponse => {
        process.env.ACCESS_TOKEN = tokenResponse.data.access_token
        process.env.REFRESH_TOKEN = tokenResponse.data.refresh_token
    })
    .catch(err => {
        console.log(err)
    })

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"))
})