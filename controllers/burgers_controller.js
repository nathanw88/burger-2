var express = require("express");

var router = express.Router();
var db = require("../models")

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burger.findAll({}).then(function (data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
  db.burger.create({ burger_name: req.body.burger_name }).then(function (result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    // console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  db.burger.update({
    devoured: true
  }, 
  {
    where: 
    {
      id: parseInt(req.params.id)
    }
    }).then(function (result){
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      // Send back response and let page reload from .then in Ajax
      res.send(result)
      console.log("here")
      // res.redirect()
    });
});

module.exports = router;
