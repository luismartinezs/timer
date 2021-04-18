const END_TIME = new Date('Jul 3, 2021 00:00:00').getTime()

let timer = null

init()

function init () {
  writeTime()
  timer = setInterval(handleTimer, 1000)
}

function handleTimer () {
  writeTime()

  if (END_TIME - Date.now() < 0) {
    clearInterval(timer)
    document.getElementById('timer').textContent = 'Bang Bang!'
  }
}

function writeTime () {
  const time = calcTimeLength(END_TIME - Date.now())

  document.getElementById('timer').textContent = time.length
  document.getElementById('daysLeft').textContent = time.days
}

/**
 * @param {Number} timeLength in milliseconds
 * @returns object with time length as a String in format DDd HHh MMm SSs and number of days
 */
function calcTimeLength (timeLength) {
  const days = Math.floor(timeLength / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLength % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeLength % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLength % (1000 * 60)) / 1000)

  return {
    length: `${days}d ${hours}h ${minutes}m ${seconds}s`,
    days
  }
}
