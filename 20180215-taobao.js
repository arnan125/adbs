const {adbClick, sleep, quzz} = require('./util')

async function start () {
  const answer = await quzz('start now ? y/n\n')
  let count = 0
  let [x, y] = [350, 1120]  
  if (!(/y/i).test(answer)) return
  while (1) {
    adbClick(x, y)
    console.log('click count', count++)
    await sleep(Math.random() * 500 + 3750 | 0)
  }
}

start()
