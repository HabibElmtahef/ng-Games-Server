const router = require('express').Router();

const indexController = require('../controllers/indexController');
//import indexController from '../controllers/indexController'
router.get('/', indexController.test)


module.exports = router;