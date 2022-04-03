const Company = require("../models/Company")

module.exports = {
    get: async (req,res) => {
        try {
            const company = await Company.findOne({_id : req.params.companyId})
            res.send(company) 
        } catch (error) {
            res.status(404).send('Company not found')
        }
    },
    post: async (req,res) => {
        res.send("Post: Hello World")
    },
    patch: async (req,res) => {
        res.send("Patch: Hello World")
    },
    delete: async (req,res) => {
        res.send("Delete: Hello World")
    }
}