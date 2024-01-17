const express = require('express')
const dotenv = require('dotenv')
const morgan =  require('morgan')
const bodyparser = require('body-parser')
const path = require('path');
const router = require('./server/routes/router');
const connectDB=require('./server/database/connection.js');


const app = express();

dotenv.config({path:'config.env'})
const port = process.env.PORT || 3000

//log requests
app.use(morgan('tiny'));

//mongodb
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

//set view engine
app.set('view engine','ejs')
//app.set('views',path.resolve(__dirname,'views/ejs'))

//load assest
//app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// console.log((path.resolve(__dirname, "assets/css")))
app.use('/static', express.static(path.resolve(__dirname, 'views')));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/static', express.static(path.resolve(__dirname, "views")))


//load router
app.use('/',router)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})