const ProjectVo = require('../vo/ProjectVo')
const ExecUtil = require('../commons/exec-util')
const { renderRequestType, ResultVo } = require('exmd')

function startServe(req, res) {
  const { filename } = ProjectVo(req.body)
  const shell = `cd projects/${filename} && git pull && sh run.sh`
  ExecUtil.runShell(shell)
    .then(() => {
      res.send(
        ResultVo({
          status: 0,
          data: null
        })
      )
    })
    .catch((res) => {
      console.info('>>>>>>>>', res + '')
    })
}
function stopServe(req, res) {
  const { filename } = ProjectVo(req.body)
  const shell = `cd projects/${filename} && git pull && sh stop.sh`
  ExecUtil.runShell(shell)
    .then(() => {
      res.send(
        ResultVo({
          status: 0,
          data: null
        })
      )
    })
    .catch((res) => {
      console.info('>>>>>>>>', res)
    })
}
function restartServe(req, res) {
  const { filename } = ProjectVo(req.body)
  const stopShell = `cd ${__dirname.replace(
    '/controller',
    ''
  )}/projects/${filename} && git pull && set -e sh stop.sh`
  const startShell = `cd projects/${filename} && git pull && sh run.sh`
  ExecUtil.runShell(stopShell).then(() => {
    ExecUtil.runShell(startShell).then(() => {
      res.send(
        ResultVo({
          status: 0,
          data: null
        })
      )
    })
  })
}
// 配置接口文档
exports.startServe = renderRequestType(
  startServe,
  'POST',
  ProjectVo,
  ProjectVo,
  '启动项目'
)
exports.stopServe = renderRequestType(
  stopServe,
  'POST',
  ProjectVo,
  ProjectVo,
  '停止项目'
)
exports.restartServe = renderRequestType(
  restartServe,
  'POST',
  ProjectVo,
  ProjectVo,
  '重启项目'
)
exports.name = 'AppDelayController'
exports.description = '项目部署'
