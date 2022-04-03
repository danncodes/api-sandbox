const express = require("express")
const router = express.Router()

const companiesController = require("../controllers/companiesController")
const companyController = require("../controllers/CompanyController")

router.use(express.json())

router.get('/', companiesController.get)

router.get('/:companyId', companyController.get)
router.post('/:companyId', companyController.post)
router.patch(':companyId/', companyController.patch)
router.delete('/:companyId', companyController.delete)

module.exports = router