const devolopment = require('./devolopment.env')
const production = require('./production.env')
const test = require('./test.env')

/* 在package.json中定义 env 在配置 */
module.exports = {
  production,
  devolopment,
  test
}