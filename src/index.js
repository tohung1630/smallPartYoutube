const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const sortMiddleware = require('./app/middleware/sortMiddleware')
const app = express()

const port = 3000

const routes =require('./routes')
const db = require('./config/db')

//connect db
db.connect()


app.use(express.static(path.join(__dirname,'public')))


app.use(
  express.urlencoded({
      extended: true,
  }),
)
app.use(express.json());


app.use(methodOverride('_method'))


//http logger
app.use(morgan('combined'))


// sortMiddleware
app.use(sortMiddleware)

// template engine
app.engine('hbs', handlebars.engine({extname:'.hbs',
  helpers: {
    sum:(a,b)=> a+b,
    sortlist:(field, sort)=>{
      // const sortType = field === sort.column ? sort.type : 'default'
      const icons={
        default:'fas fa-arrows-alt-v',
        asc:'fas fa-arrow-down',
        desc:'fas fa-arrow-up'
      }
      const types={
        default:'desc',
        asc:'desc',
        desc:'asc'
      }
      const icon=icons[sort.type]
      const type=types[sort.type]
        return `<a href="?_sort&column=${field}&type=${type}">
                  <i class="${icon}"></i>
                </a>`
    }

  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))


routes(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})