const getInterpretationColor = (classification) => {
  switch (true) {
    case classification.includes('pathogenic'):
      return 'red'
    case classification.includes('benign'):
      return 'green'
    default:
      return 'black'
  }
}

export default getInterpretationColor
