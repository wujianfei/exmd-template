const AppListVo = require('../vo/AppListVo')
const ExecUtil = require('../commons/exec-util')
const ProjectsListConfig = require('../config/projects-config')
const { renderRequestType, handleClientAdapter, ResultVo } = require('exmd')
const test = require('exmd')
const { omuser } = require('../models')
// const AppItemsController = require('./AppItemsController')
// const aic = new AppItemsController()
// console.info('AppItemsController =====>>>>', aic)
function getStatus(item, serverList) {
  // 这里配置不同状态
  const statusMap = {
    online: '运行中',
    stopped: '已停止'
  }
  let result = {
    status: 'offline',
    statusName: '未启动'
  }
  if (serverList.length <= 0) return result
  for (let i = 0; i < serverList.length; i++) {
    const list = serverList[i]
    if (list.length !== 13) continue
    if (item.serverName === list[1]) {
      result = {
        status: list[8],
        statusName: statusMap[list[8]]
      }
      break
    }
  }
  return result
}

function getAppList(req, res, ogisticServiceData) {
  const client = handleClientAdapter(ogisticServiceData, 'onemind_postgresql') // 拿到某个数据源对应的连接池
  const omu = new omuser(client)
  omu.query().then(res => {
    console.info('查询结果', res.rows)
  })
  const shell = `pm2 list`
  ExecUtil.runShell(shell).then((result) => {
    const serverList = ExecUtil.getServerList(result.stdout)
    res.send(
      ResultVo({
        status: 0,
        data: AppListVo({
          serverList,
          projectList: ProjectsListConfig.map((item) => {
            return {
              ...item,
              serverStatus: getStatus(item, serverList)
            }
          })
        })
      })
    )
  })
}

// 配置接口文档
exports.getAppList = renderRequestType(
  getAppList,
  'POST',
  null,
  AppListVo,
  '获得管理项目列表'
)
exports.name = 'AppListController'
exports.description = '项目管理'
