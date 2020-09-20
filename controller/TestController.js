const { ResultVo, renderRequestType } = require('exmd')

function testGetServe(req, res) {
  res.send(ResultVo({
    status: 0,
    data: null
  }))
}
function testPutServe(req, res) {
  res.send(ResultVo({
    status: 0,
    data: null
  }))
}
function testDeleteServe(req, res) {
  res.send(ResultVo({
    status: 0,
    data: null
  }))
}
exports.testGetServe = renderRequestType(testGetServe, 'GET')
exports.testPutServe = renderRequestType(testPutServe, 'PUT')
exports.testDeleteServe = renderRequestType(testDeleteServe, 'DELETE')
exports.name = 'TestController'
exports.description = "测试其他"