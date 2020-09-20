const { ResultVo } = require('exmd')

function getProjectList(req, res) {
  res.send(ResultVo({
    status: 0,
    data: [{
      name: '千模项目',
      icon: '',
      bgImg: ''
    }]
  }))
}

exports.getProjectList = getProjectList
exports.name = 'ProjectsController'