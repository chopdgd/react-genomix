import { toLower } from 'lodash'

const getInterpretationColor = value => {
  const classification = toLower(value)

  switch (true) {
    // Constitutional/Germline Classifications
    case classification.includes('pathogenic'):
      return 'red'
    case ['uncertain significance', 'vus'].includes(classification):
      return 'blue'
    case classification.includes('benign'):
      return 'green'

    // Somatic Classifications
    case ['tier 1 - a', 'tier 1 - b', 'tier 2'].includes(classification):
      return 'red'
    case classification.includes('tier 3'):
      return 'blue'
    case classification.includes('tier 4'):
      return 'green'
    default:
      return 'black'
  }
}

export default getInterpretationColor
