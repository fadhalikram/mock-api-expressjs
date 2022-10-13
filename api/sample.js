var express = require('express');
var router = express.Router();

const { body, validationResult } = require('express-validator');

/* Sample LIST */
router.get('/', (req, res) => {
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

  return res.status(200).json(response);
});

/* Sample DETAIL */
router.get('/:id', (req, res) => {
  const response = {
    data: {
      text: "Sample Text",
      number: 1,
      date: "20-10-2022"
    }
  }

  return res.status(200).json(response)
});

/* Sample CREATE */
router.post(
  '/', 
  body('text').not().isEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const response = {
      data: {
        id: 1,
        text: "Sample Text",
        number: 1,
        date: "20-10-2022"
      }
    }

    return res.status(200).json(response);
});

/* Sample UPDATE */
router.put(
  '/', 
  body('text').not().isEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const response = {
      data: {
        id: 1,
        text: "Sample Text",
        number: 1,
        date: "20-10-2022"
      }
    }

    return res.status(200).json(response);
});

/* Sample DELETE */
router.delete('/', (req, res) => {
  const response = {
    data: null,
  }

  return res.status(200).json(response);
});

module.exports = router;