const adb = '/Users/arnan/.nexustools/adb' // get this by run `which adb`
const exec = require('child_process').exec
const execSync = require('child_process').execSync
const readline = require('readline')



function adbClick (x, y) {
  timestamp = Date.now()
  const cmd = `${adb} shell input tap ${x} ${y}`
  console.log(cmd)
  // const cmd = `${adb} shell screencap -p | perl -pe 's/\\x0D\\x0A/\\x0A/g' > ${filename}`
  try {
    execSync(cmd)
  } catch (e) {
    console.log(e)
  }
}

function sleep (time) {
  return new Promise ((resolve, reject) => [
    setTimeout(resolve, time)
  ])
}

function pendingPoint () {
  if (!pendingPoint.count) pendingPoint.count = 0
  pendingPoint.count ++
  pendingPoint.count %= 5
  return '.'.repeat(pendingPoint.count)
}

function quzz (msg) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise((resolve, reject) => {
    rl.question(msg, answer => {
      rl.close()
      resolve(answer)
    })
  })
}

module.exports = {
  sleep,
  quzz,
  adbClick
}
