let express = require("express")
let router = express.Router()
let axios = require("axios")

router.get("/", function(req, resp) {
    let url = process.env.EVERYTHING_URL
    let access_token = process.env.ACCESS_TOKEN

    axios
        .get(url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then(function(res) {
            console.log("")
            let post = res.data.entry[0].resource
            resp.render("index", {posts: post})
        })
        .catch(function(error) {
            console.error(error.response)
        })
})

module.exports = router