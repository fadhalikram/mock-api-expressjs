var express = require('express');
var router = express.Router();

/* Sample LIST */
router.get('/', function(req, res, next) {
  const response = {
    data: {
      list: [
        {
          text: "Sample Text",
          number: 1,
          date: "20-10-2022"
        }
      ],
      row_count: 1
    }
  }

  res.send(response);
});

/* Sample DETAIL */
router.get('/:id', function(req, res, next) {
  const response = {
    data: {
      text: "Sample Text",
      number: 1,
      date: "20-10-2022"
    }
  }

  res.send(response)
});

/* Sample CREATE */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Sample UPDATE */
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Sample DELETE */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;