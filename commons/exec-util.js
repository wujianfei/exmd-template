const exec = require('child_process').exec; 

function runShell(shell) {
  return new Promise((resolve, reject) => {
    exec(shell, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return;
      }
      resolve({
        error,
        stdout,
        stderr
      })
    });
  })
}

function getServerList(text) {
  if (text.indexOf('┤') === -1) 
  return []
  const start = '┤'
  const end = '└─'
  const str = text.substring(text.indexOf(start) + 1, text.indexOf(end))
  const list = str.split('│')
  list.splice(0, 1)
  list.splice(list.length - 1, 1)
  // console.log('打开这个调试可以查看pm2 list的最新表格列数，str是',str, '\n查出列表是', list)
  const tempArray = []
  let tempIndex = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i]=== '\n') {
      tempIndex++
      continue
    } else {
      if (tempArray[tempIndex] === undefined) {
        tempArray[tempIndex] = []
      }
      tempArray[tempIndex].push(list[i].replace(/^\s+|\s+$/g, ''))
    }
  }
  return tempArray
}

exports.runShell = runShell
exports.getServerList = getServerList