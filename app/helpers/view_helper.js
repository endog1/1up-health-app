class ViewHelper {
    static renderListHTML(jsonObj) {
        let html = ""
        for (let key in jsonObj) {
            if (typeof jsonObj[key] != 'object') {
                html = html.concat(`<li><b>${key}:</b> ${jsonObj[key]}</li>`)
            } else {
                html = html.concat(`<li><b>${key}:</b><ul>${this.renderListHTML(jsonObj[key])}</ul></li>`)
            }
        }
        return html
    }

    static renderJsonList(jsonObj) {
        let list = this.renderListHTML(jsonObj)
        return list
    }
}

module.exports = exports = ViewHelper