const { asyncdb } = require('exmd')
const PostConfig = require('../config/data-source')
const models = require('../models')
const data = PostConfig.onemind_postgresql.data
asyncdb(data, models)