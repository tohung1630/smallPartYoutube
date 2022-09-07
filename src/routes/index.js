const videoRoutes = require('./video')
const siteRoutes = require('./site')
const meRoutes = require('./me')



function routes(app){


    app.use('/video',videoRoutes)

    app.use('/me',meRoutes)

    app.use('/',siteRoutes)
}

module.exports=routes