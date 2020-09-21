const { startExmdViews } = require('exmd-auxiliary')
startExmdViews({
  apiPort: parseInt(process.env.API_PORT), // api网站端口
  port: 3000 // api端口
})