const assert = require('assert')
let viewHelper = require("../app/helpers/view_helper")
let data = require("./data/testData")

describe('renderListHTML()', function() {
    it('should return the json object as a html list', async function() {
        let actualResult = viewHelper.renderListHTML(data.testJsonObj)
        assert.equal(actualResult, data.testHtmlList)
    })
})