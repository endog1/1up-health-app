let express = require("express")
let router = express.Router()
let api = require("../app/helpers/api")
let viewHelper = require("./helpers/viewHelper")

router.get("/", async function(req, resp) {
    resp.render("index")
})

router.get('/patient', async function (req, res) {
    try {
        let data = await api.everythingQuery(req.query)
        let htmlList = await viewHelper.renderListHTML(data.data)
        res.render("index", { table: htmlList })
    } catch (error) {
        console.log(error)
        res.render("index", {table: error})
    }
})

module.exports = exports = router