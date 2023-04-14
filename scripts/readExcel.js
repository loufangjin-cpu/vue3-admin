const XLSX = require('xlsx')
const fs = require('fs-extra')
const path = require('path')
const readExcel = () => {
  // const data = fs.readFileSync(path.resolve(__dirname, './a.js'))
  const workbook = XLSX.readFile(path.resolve(__dirname, './output/face.xlsx'))
  const sheetNames = workbook.SheetNames
  const worksheet = workbook.Sheets[sheetNames[1]]
  return filterJson(worksheet)
}
const filterJson = worksheet => {
  const jsonChartsList = XLSX.utils.sheet_to_json(worksheet)
  const list = jsonChartsList.map(node => {
    if (node['部门']) {
      return {
        部门: node['部门'],
        市场部: node['市场部'],
        工程部: node['工程部'],
        财务部: node['财务部']
      }
    }
  })
  return list.filter(Boolean).filter(item => {
    return Object.keys(item).includes('部门')
  })
}
module.exports = {
  readExcel
}
