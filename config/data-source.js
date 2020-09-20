module.exports = {
  // postgresql onemind数据库
  onemind_postgresql: {
    type: 'postgresql',
    data: {
      user: 'postgres',
      database: 'onemind',
      password: 'wxhcj1314520',
      host: 'localhost',
      port: '5432',
      poolSize: 5,
      poolIdleTimeout: 30000,
      reapIntervalMillis: 10000
    }
  }
}