const express = require('express')
const router =express.Router()

const videoControllers =require('../app/controllers/videoControllers')

router.get('/Create',videoControllers.createVideo)

router.post('/Store',videoControllers.storeVideo)

router.put('/update/:id',videoControllers.updateVideo)

router.patch('/restore/:id',videoControllers.restoreVideo)


router.delete('/deleteGarbageCan/:id',videoControllers.deleteGarbageCanVideo)

router.post('/GarbageCansVideo',videoControllers.GarbageCansVideo)

router.delete('/deletes',videoControllers.deletesVideo)

router.delete('/delete/:id',videoControllers.deleteVideo)

router.get('/edit/:id',videoControllers.fixVideo)


router.get('/:id',videoControllers.showVideo)

module.exports = router