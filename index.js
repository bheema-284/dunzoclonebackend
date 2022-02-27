
const express = require("express")
require('dotenv').config();
const port = process.env.PORT || 5000;
const connect = require('./src/configs/db');
const app = express();
app.all('*', function (req, res, next) {
  var origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const groceryController = require('./src/controllers/groceries.controller');
const restaurantController = require('./src/controllers/restaurants.controller');
const fruitController = require('./src/controllers/fruits.controller');
const vegetableController = require('./src/controllers/vegetable.controller');
const restaurantnameController = require('./src/controllers/restaurantname.controller');
const marketController = require('./src/controllers/market.controller');
const userController = require('./src/controllers/user.controller');
const passport = require('./src/configs/google-oauth');
const {
  register,
  login,
  newToken,
} = require('./src/controllers/auth.controller');

app.use(express.json());

app.use('/groceries', groceryController);
app.use('/restaurants', restaurantController);
app.use('/fruits', fruitController);
app.use('/vegetables', vegetableController);
app.use('/restaurantnames', restaurantnameController);
app.use('/markets', marketController);
app.post('/register', register);
// .login
app.post('/login', login);

app.use('/users', userController);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google/failure',
  }),
  (req, res) => {
    const { user } = req;
    const token = newToken(user);
    return res.send({ user, token });
  },
);

app.listen(port, async () => {
  try {
    await connect();
    console.log('Listening on port :', port);
  } catch (err) {
    console.log(err.message);
  }
});