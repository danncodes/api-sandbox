const Company = require("../models/Company")

module.exports = {
    get: async (req,res) => {
        try {
            const { Page } = req.query
            const companies = await Company.find({}).skip(Page * 10 || 0).limit(10)
            res.send(companies)
        } catch (error) {
            res.status(404).send('Sorry, an error occoured')
        }
    },
    post: async (req,res) => {
        try {
            const company = new Company(req.body)
            company.save()
            res.send(`Company Saved: ${company.name}`)
        } catch (error) {
            res.status(404).send('Sorry, an error occoured')
        }
    },
}