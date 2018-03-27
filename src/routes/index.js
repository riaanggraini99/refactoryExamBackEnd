const express = require('express');
const router = express.Router();
const model = require('../model/mantan')();

// READ
router.get('/', (req, res) => {
  model.find({}, function (err, mantans) {
    if (err) throw err;

    res.render('index', {
      title: 'Mantan list',
      mantans
    });
  });
});

// CREATE
router.post('/add', (req, res, next) => {
  let body = req.body;
  body.status = false;
  model.create(body, (err, mantan) => {
    if(err) throw err;
    res.redirect('/');
  });
});

// UPDATE
router.get('/turn/:id', (req, res, next) => {
  let id = req.params.id;
  model.findById(id, (err, mantan) => {
    if (err) throw err;
    mantan.status = !mantan.status;
    mantan.save()
      .then(() => res.redirect('/'));
  });
});

// DELETE
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;
  model.remove({_id: id}, (err, mantan) => {
    if (err) throw err;
    res.redirect('/');
  });
});

//EDIT


module.exports = router;
