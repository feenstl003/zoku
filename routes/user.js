var express = require('express');
var router = express.Router();
var Linkedin = require('node-linkedin')('86tmt7563zfu01', 'cNQYg5qYOKIVes7g', 'http://localhost:3000/user/oauth');

/* GET users listing. */
router.get('/', function(req, res) {
    // console.log(req.body);
  res.render("user/login")
});
router.post('/', function(req, res) {
    // var
    console.log(req.body.password);
  // res.render("user/login")
});

router.get('/linkedin', function(req, res) {
  var scope = ['r_basicprofile', 'r_emailaddress'];

  // This will ask for permisssions etc and redirect to callback url.
  Linkedin.auth.authorize(res, scope, "ShyItP08atIwvlL");
  // res.redirect("user")
});

router.get('/oauth', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if (err) {
          return console.error(err);
        }
        else {
          console.log(results);

          var linkedin = Linkedin.init(results.access_token);
          linkedin.people.me(function(err, $in) {
                // Loads the profile of access token owner.
                if (err) {
                  console.log(err);
                }
                else {
                  console.log($in);
                }
          });

          return res.redirect('/user')
        }
    });
})

router.get('/:me', (req,res)=>{
    res.render('me')
})


router.get('/new', function(req, res) {
  res.render('user/create');
});

module.exports = router;
