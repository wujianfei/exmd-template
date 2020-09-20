/**
 * 项目实体
 * @param {*} params 
 */
function ProjectVo(params) {
  const { filename } = params
  return {
    filename
  }
}

ProjectVo.prototype.swaggerDescription = {
  filename: '项目文件名'
}

module.exports = ProjectVo