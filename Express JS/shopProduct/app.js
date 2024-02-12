const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require("./util/db");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const User = require('./models/user');
const Product = require('./models/product');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { error, log } = require('console');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // Using Sequelize to find a user with userId equal to 1
    User.findByPk(1)
        .then(result => {
            if (result) {
                // Logging the user's dataValues (attribute values) to the console
                console.log(result.dataValues.userId);
                
                // Attaching the user object to the request object for later use in the request lifecycle
                req.user = result;
            } else {
                console.log("User not found");
            }

            // Passing control to the next middleware or route handler
            next();
        })
        .catch(error => {
            // Logging any errors that occurred during the Sequelize query
            console.log(error);
            
            // Passing control to the next middleware or route handler
            next(error);
        });
});


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product)

sequelize.sync()
.then((result)=>{
    // console.log(result);
    return User.findByPk(1);
})
.then(u=>{
    if(!u){
        return User.create({name:"rohit", email:"rohit@gmail.com"})
    }
    return u;
})
.then(u=>{
    app.listen(3000);
})
.catch((error)=>{
    console.log(error);
})


