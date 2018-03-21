const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser');

const app = express();

const indexRoutes = require('./routes/index.js')

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));


//route
app.use('/', indexRoutes);



app.listen(app.get('port'),() =>{
console.log('server on port', app.get('port'));
});


/*const logger = require('morgan')
const mongoose=require('mongoose');

const bodyParser = require('body-parser')

const app = express();

const indexRoutes = require('')

//setting

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(_dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use('logger'('dev'));
app.use(bodyParser.urlendcoded({extended: false}));

app.use('/',indexRoutes);

app.listen(app.get('port'),()=>{
    console.log('listen on port', app.get('port'));
}); */