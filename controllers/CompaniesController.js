const Company = require("../models/Company")

module.exports = {
    get: async (req,res) => {
        try {
            const companies = await Company.find({}).limit(10)
            res.send(companies)
        } catch (error) {
            res.status(404).send('Sorry, an error occoured')
        }
    },
}