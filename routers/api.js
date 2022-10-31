
const Router =  require('@koa/router')
const WelcomeController =  require('../controllers/WelcomeController.js')
const HomeController =  require('../controllers/HomeController.js')
const router = new Router()

router.get('/', WelcomeController.index)
router.get('/home', HomeController.index)

module.exports = router