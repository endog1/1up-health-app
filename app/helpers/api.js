let axios = require("axios")

class apis {
    static async everythingQuery(query) {
        let url = `${process.env.API_URL_1UP_HEALTH}/fhir/${query.type}/Patient/${query.id}/$everything`
        let access_token = process.env.ACCESS_TOKEN
        try {
            let res = await axios
                .get(url, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                })
            let renderData = {
                statusOk: true,
                data: res.data.entry
            }
            return renderData
        } catch (error) {
            let renderData = {
                statusOk: false,
                error: error.response.status,
                errorDescription: error.response.statusText,
                data: {Error: `${error.response.status} ${error.response.statusText}`}
            }
            return renderData
        }
    }

    static generateCode() {
        let generate_code_url = process.env.GENERATE_ACCESS_CODE_URL
        return axios
            .post(generate_code_url, {
                app_user_id: 12346,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            })
    }

    static generateAccessToken() {
        let generate_tokens_url = process.env.GENERATE_TOKENS_URL
        return axios
            .post(generate_tokens_url, {
                code: process.env.CODE,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: "authorization_code"
            })
    }
}

module.exports = exports = apis