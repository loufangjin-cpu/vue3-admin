// 对excel 读写操作

const path = require('path')
const { exec } = require('child_process')
const fs = require('fs-extra')
const beautify = require('json-beautify')
const { readExcel } = require('./readExcel.js')
// 项目路径
const wholePath = path.resolve(__dirname, '../src/utils/fetchChart.js')
const prettierPath = path.resolve(__dirname, '../prettier.js')

const result = readExcel()

console.log('result', result)

fs.writeFileSync(wholePath, `export default ${beautify(result, null, 2, 100)}`)

// 格式化
const formatPath = `prettier --config ${prettierPath} --write '${wholePath}`

// 执行 shell 脚本命令
exec(formatPath)
