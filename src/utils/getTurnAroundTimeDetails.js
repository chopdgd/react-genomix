import moment from 'moment'

const getTurnAroundTimeDetails = (target, start, signout) => {
  const now = moment(Date.now())
  const startMoment = moment(start)

  let daysPassed
  let label
  let color = 'yellow'
  // If it has a signout date, we can use this to subtract against
  if (signout) {
    const signoutMoment = moment(signout)
    daysPassed = signoutMoment.diff(startMoment, 'days')
    label = (target - daysPassed) * -1

    if (daysPassed > target) {
      color = 'red'
    } else {
      color = 'green'
    }

    // If not, we have to calculate from now
  } else {
    daysPassed = now.diff(startMoment, 'days')
    label = (target - daysPassed) * -1

    const percent = daysPassed / target
    // Label is the time to signout date
    // If the target signout date is 12/19/1987 and today is 12/18/1987, we would display -1
    // We count negative towards the expected date, and incrementally up past signout

    if (percent < 0.5) {
      color = 'green'
    } else if (percent > 0.9) {
      color = 'red'
    }
  }

  return {
    label,
    daysPassed,
    color,
    value: signout ? target : daysPassed,
  }
}

export default getTurnAroundTimeDetails
