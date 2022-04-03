const Company = require("../models/Company")

module.exports = {
    get: async (req,res) => {
            res.send("Get: Hello World")
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