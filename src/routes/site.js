const express = require('express')
const router =express.Router()

const siteControllers =require('../app/controllers/siteControllers')

router.get('/',siteControllers.home)

// router.post('/search',siteControllers.search)

module.exports = router