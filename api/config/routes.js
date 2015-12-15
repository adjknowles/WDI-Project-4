var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');
var recommendationsController = require('../controllers/recommendationsController');
var authenticationsController = require('../controllers/authenticationsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/')
  .get(usersController.usersIndex)
 
router.route('/users')
  .get(usersController.usersIndex)
//   .post(usersController.usersCreate)

router.route('/users/:id') 
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete)

router.route('/recommendations')
  .get(recommendationsController.recommendationsIndex)
  .post(recommendationsController.recommendationsCreate)

router.route('/recommendations/:id') 
  .get(recommendationsController.recommendationsShow)
  .patch(recommendationsController.recommendationsUpdate)
  .delete(recommendationsController.recommendationsDelete)

router.route('/recommendations/new')
  .get(recommendationsController.recommendationsIndex)
  .post(recommendationsController.recommendationsCreate)

module.exports = router;