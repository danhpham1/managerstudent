const express = require('express');
const bodyParser = require('body-parser');
const routeHome = require('./routers/home');
const loginRouter = require('./routers/login');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');

//middleware
const middleware = require('./middleware/checkout');


const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'manager',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 3000000 }
}))

app.use(passport.initialize());

app.use(passport.session());

//connect to mongoodb
mongoose.connect('mongodb+srv://danh:hanhphucao@clusterblog-sbxju.mongodb.net/managerstudent?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}, function (err) {
    if (err) {
        console.log('connect faild');
    } else {
        console.log('connect successful');
    }
})



app.use('/login', loginRouter);
app.use('/', middleware.ensureAuthenticated, routeHome);


app.listen(process.env.PORT || 3000, () => {
    console.log('server started!');
})