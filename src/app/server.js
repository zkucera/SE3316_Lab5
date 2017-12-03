// server.js

// BASE SETU
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
       // res.setHeader('Access-Control-Allow-Origin', 'http://lab5-zkucera.c9users.io');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }
);
var port = 8081;        // set our port
var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/users')
var User     = require('./models/user');
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/', express.static('static'));

// more routes for our API will happen here
router.route('/users1')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
  
    .post(function(req, res) {
     
      console.log(req.body);
     
        
        var user = new User();      // create a new instance of the Bear model
        user.email= req.body.emailb;  // set the bears name (comes from the request)
       
        user.password = req.body.passwordb;
        
        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            
            res.json({ message: 'User created!' });
        });

    })
    
    .get(function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "http://lab5-zkucera.c9users.io");
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    })
        
    
    .put(function(req, res) {

      
    if (err) throw err;

    // fetch user and test password verification
    User.findOne({ username: req.body.emailb }, function(err, user) {
        if (err) throw err;

        // test a matching password
        user.comparePassword(req.body.passwordb, function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch); // -> Password123: true
        });

        
    });

        
        
        
        
    })
    
  
    
    .delete(function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);