const { startProject } = require('exmd')
const router = require('./router')
const Datasource = require('./config/data-source')

startProject({
  router,
  Datasource
})
