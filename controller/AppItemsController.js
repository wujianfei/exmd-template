const ResultVo = require('../vo/ResultVo')
const AppListVo = require('../vo/AppListVo')
const ExecUtil = require('../commons/exec-util')
const ProjectsListConfig = require('../config/projects-config')
const { renderRequestType } = require('../utils/RequestTypeClassUtil')
// const { handleClientAdapter } = require('../server/db-server/db-Adapter')
// const { omuser } = require('../models')

/**
 * 核心控制器
 */
class CoreController {
  constructor(ogisticServiceData) {}
}

// 开发者眼中的基础控制器，真正的基础控制器是CoreController, 该修饰器主要修饰集成基础控制器和类的描述信息
function BaseController({ description }) {
  return (target) => {
    const TempFun = function () {}
    TempFun.prototype = CoreController.prototype
    CoreController.prototype = new TempFun()
    target.description = description
  }
}

// 类方法修饰器
function render({ type, requestVo, responseVo, description }) {
  return (target) => {
    console.info('target = ', target, target.prototype)
    target.customRequestType = type
    target.requestVo = requestVo
    target.responseVo = responseVo
    target.description = description
  }
}

@BaseController({
  description: '测试控制器'
})
class AppItemsController {
  @render({
    type: 'POST',
    requestVo: AppListVo, // 可以为null, 提供给api文档用，描述的是接口参数
    responseVo: AppListVo, // 可以为null, 提供给api文档用，描述的是返回信息
    description: '获取在运行的应用'
  })
  getAppList = function (req, res, ogisticServiceData) {
    console.info('执行getAppList')
  }

  @render({
    type: 'GET',
    requestVo: AppListVo,
    responseVo: AppListVo,
    description: '通过编号删除应用'
  })
  removeAppById = function () {
    console.info('执行删除应用')
  }

  test = function() {
    console.info('测试拿ogisticServiceData', this.ogisticServiceData)
  }
}

module.exports = AppItemsController
