const express = require("express")
const app = express()

const companiesRoute = require("./routes/Companies")

app.listen(4000, () => {
    console.log("Running on port 4000")
    require("./models/index")
})

app.use("/companies", companiesRoute)

module.exports = app