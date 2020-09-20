const AppDelayController = require('../controller/AppDelayController')
const AppListController = require('../controller/AppListController')
const TestController = require('../controller/TestController')

const router = [
  {
    url: '/auto-deplay/',
    controller: AppDelayController
  },
  {
    url: '/auto-deplay/',
    controller: AppListController
  },
  {
    url: '/auto-deplay/',
    controller: TestController
  }
]

module.exports = router