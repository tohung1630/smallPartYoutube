const express = require('express')
const router =express.Router()

const meControllers =require('../app/controllers/meControllers')

router.get('/listvideo',meControllers.listvideo)

router.get('/GarbageCan',meControllers.GarbageCan)


module.exports = router