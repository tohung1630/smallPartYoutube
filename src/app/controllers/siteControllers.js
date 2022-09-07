const video =require('../models/Video')
const {listMongooseObject}=require('../../Util/mongoose')

class SiteContronllers{
    home(req, res, next){
        video.find({})
            .then(videos=>res.render('home',{videos: listMongooseObject(videos)}))
            .catch(next)

        // res.render('home')
    }
    // search(req, res, next){
    //     video.find({tenvideo: {$regex: '%nhạc' }})
    //         .then(videos=>res.render('search/search',{videos: listMongooseObject(videos)}))
    //         .catch(next)

    //     // video.find({})
    //     //     .then(videos=>res.render('home',{videos: listMongooseObject(videos)}))
    //     //     .catch(next)

    //     // res.render('search/search')
    // }
}
module.exports=new SiteContronllers