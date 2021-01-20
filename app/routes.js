let express = require("express")
let router = express.Router()
let api = require("../app/helpers/api")
let viewHelper = require("../app/helpers/view_helper")

router.get("/", async function(req, resp) {
    resp.render("index")
})

router.get('/patient', async function (req, res) {
    try {
        let data = await api.everything(req.query)
        let htmlTable = await viewHelper.renderJsonList(data)
        res.render("index", { table: htmlTable })
    } catch (e) {
        res.render("index", {table: e})
    }
})

module.exports = router