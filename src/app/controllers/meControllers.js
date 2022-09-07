const video =require('../models/Video')
const {listMongooseObject,mongooseObject}=require('../../Util/mongoose')


class MeControllers{
    listvideo(req, res, next){   

        let videoQuery=video.find({})
        if(req.query.hasOwnProperty('_sort')){
            videoQuery =videoQuery.sort({
                [req.query.column]:req.query.type
            })
        }


        Promise.all([video.countDocumentsDeleted(),videoQuery])
            .then(([countDelete,videos])=>res.render('me/listvideo',{countDelete,videos: listMongooseObject(videos)}))
            .catch(next)

        // // video.countDocumentsDeleted()
        // //     .then(countDelete=>{
        // //         console.log('hghhhhhhhhhhhhh'+countDelete)
        // //     })
        // //     .catch(()=>{})


        // video.find({})
        //     .then(videos=>res.render('me/listvideo',{videos: listMongooseObject(videos)}))
        //     .catch(next)
    
    }
    GarbageCan(req, res, next){   

        

        video.findDeleted({})
            .then(videos=>res.render('me/GarbageCan',{videos: listMongooseObject(videos)}))
            .catch(next)
    
    }
}

module.exports=new MeControllers