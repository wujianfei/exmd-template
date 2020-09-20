/**
 * 项目实体
 * @param {*} params
 */
function AppListVo(params) {
  const { serverList, projectList } = params
  return {
    serverList,
    projectList
  }
}

AppListVo.prototype.swaggerDescription = {
  serverList: [
    [
      '1',
      'autoDeplayClient',
      'default',
      '0.1.0',
      'fork',
      '12036',
      '3h',
      '0',
      'online',
      '0%',
      '604.0kb',
      'wujianf…',
      'disabled'
    ],
    [
      '10',
      'thousangirls',
      'default',
      '1.0.0',
      'fork',
      '15595',
      '30m',
      '0',
      'online',
      '0%',
      '604.0kb',
      'wujianf…',
      'disabled'
    ]
  ],
  projectList: [{
    "name":"项目名称",
    "filename":"映射到projects目录下的文件名称",
    "serverName":"服务名称",
    "serverStatus":{
        "status":"服务状态 online运行中 offline未运行 stopped已停止",
        "statusName":"服务名称: 运行中/未运行/已停止"
    }
  }]
}

module.exports = AppListVo
