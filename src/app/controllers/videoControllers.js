const video =require('../models/Video')
const {listMongooseObject,mongooseObject}=require('../../Util/mongoose')

class SiteContronllers{
    showVideo(req, res, next){
        
        
        Promise.all([video.findById(req.params.id), video.find({})])
            .then(([video,videos])=>res.render('video/showVideo',{video:mongooseObject(video),videos: listMongooseObject(videos)}))

        // video.findById(req.params.id)
        //     .then((video)=>res.render('video/showVideo',{video:mongooseObject(video)}))
        //     .catch(next)

        // video.find({})
        //     .then((videos)=>res.render('video/showVideo',{videos: listMongooseObject(videos)}))
        //     .catch(next)

        // // res.render('home')
    }






    //[get] video/Create
    createVideo(req, res, next){   
        res.render('video/createVideo')
    }


    //[post] video/Store
    storeVideo(req, res, next){   
        const videoStore = new video(req.body)
        videoStore.save()
            .then(()=>res.redirect('/'))
            .catch(error=>{})

        // res.json(videoStore)
    }

    //[get] video/edit/:id
    fixVideo(req, res, next){   
        video.findById(req.params.id)
            .then((video)=>res.render('video/editVideo',{video:mongooseObject(video)}))
            .catch(next)
    }



    //[put] video/update/:id
    updateVideo(req, res, next){   
        video.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/listvideo'))
            .catch(next)

        // res.json(videoStore)
    }


     //[delete] video/delete/:id
    deleteVideo(req, res, next){   
        video.delete({_id:req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }

//      [patch] video/restore/:id
    restoreVideo(req, res, next){   
        video.restore({_id:req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)

    }

    // xóa vĩnh viễn:   [delete] video/deleteGarbageCan/:id
    deleteGarbageCanVideo(req, res, next){   
        video.deleteOne({_id:req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }


     //[delete nhiều] video/deletes
     deletesVideo(req, res, next){   
        video.delete({_id:{$in:req.body.videoIds}})
            .then(()=>res.redirect('back'))
            .catch(next)
    }


    GarbageCansVideo(req,res,next){
        switch(req.body.option){
            case 'restart':
                video.restore({_id:{$in: req.body.videoIds}})
                    .then(()=>res.redirect('back'))
                    .catch(next)
                break
            case 'deletes':
                video.deleteOne({_id:{$in: req.body.videoIds}})
                    .then(()=>res.redirect('back'))
                    .catch(next)
        }
    }

}

module.exports=new SiteContronllers