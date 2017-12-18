import moment from 'moment'


const getTurnAroundTimeDetails = (target, start, signout) => {
  const now = moment(Date.now())
  const startMoment = moment(start)
  const targetMoment = moment(start).add(target, 'days')

  let daysPassed
  let label
  // If it has a signout date, we can use this to subtract against
  if (signout) {
    const signoutMoment = moment(signout)
    daysPassed = signoutMoment.diff(startMoment, 'days')
    label = targetMoment.diff(signoutMoment, 'days') * -1
  // If not, we have to calculate from now
  } else {
    daysPassed = now.diff(startMoment, 'days')
    label = targetMoment.diff(now, 'days') * -1
  }


  // Label is the time to signout date
  // If the target signout date is 12/19/1987 and today is 12/18/1987, we would display -1
  // We count negative towards the expected date, and incrementally up past signout

  let color = 'yellow'
  const percent = daysPassed/target
  if (percent < 0.33) {
    color = 'green'
  } else if (percent > 0.85) {
    color = 'red'
  }

  return {
    label,
    color,
    value: daysPassed,
  }
}


export default getTurnAroundTimeDetails
