const { migrate } = require('exmd')
const PostConfig = require('../config/data-source')
const data = PostConfig.onemind_postgresql.data
migrate(data)