var passport = require('passport');
var fs = require('fs')

var product = require('../models/product-model')
var User = require('../models/model-users')
var upload = require('../config/multer-config')

module.exports = function (server) {

    server.get('/getAllProducts', (req, res) => {
        product.
            find(function (err, products) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                console.log(products)
                res.json({ "success": true, "data": products })
            })
    })
    server.post('/Admin-Panel', upload.single('myImage'), function (req, res, next) {
        console.log(req.body)

        var newproduct = new product({ image: req.file.path, name: req.body.name, price: req.body.price, description: req.body.description, unit: req.body.unit, category: req.body.category })
        newproduct.save((err, user) => {
            if (err) {
                return res.json({ "success": false, err: err })
            }
            res.json({ "success": true, "data": user })
        });

    })
    server.get('/logout', function (req, res) {
        req.logout();
        res.send('logout');
    });
    server.post('/addCart', (req, res) => {
        
        User.findByIdAndUpdate(req.body.user,
            // findOne({_id:req.body.user},function (err, products) {
            { $push: { cart: req.body.product } }, function (err, products) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                console.log(products)
                res.json({ "success": true, "data": products })


            })
    })
    server.post('/findCart', (req, res) => {
        console.log('user', req.body.user)
        console.log('product', req.body.product)
        User.findOne({ _id: req.body.user },
            function (err, products) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                console.log(products)
                res.json({ "success": true, "data": products })


            }
        );})
        server.post('/login', passport.authenticate('local'), (req, res) => {
            res.json({ success: true, user: req.user })
        });
        server.post('/register', (req, res) => {
            User.findOne({
                email: req.body.email,
            }, (err, user) => {
                console.log(user);
                if (user) {
                    res.json({ success: false });
                } else {
                    var newUser = new User();
                    newUser.email = req.body.email;
                    newUser.password = req.body.password;
                    newUser.fullName = req.body.fullname;
                    newUser.save(function (err, user) {
                        if (err) {
                            return res.json({ "success": false, err: err })
                        }
                        res.json({ "success": true, "user": user })
                    })


                }
            });
        })
        server.get('/*', function(req, res) {
            res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
              if (err) {
                res.status(500).send(err)
              }
            })
          })
    }
