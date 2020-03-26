import { toLower } from 'lodash'

export const getColor = value => {
  value = toLower(value)

  switch (true) {
    // Constitutional/Germline Classifications
    case value.includes('pathogenic'):
      return 'red'
    case ['uncertain significance', 'vus', 'vous'].includes(value):
      return 'blue'
    case value.includes('benign'):
      return 'green'

    // Somatic Classifications
    case ['tier 1 - a', 'tier 1 - b', 'tier 2'].includes(value):
      return 'red'
    case value.includes('tier 3'):
      return 'blue'
    case value.includes('tier 4'):
      return 'green'

    // Correlations
    case value === 'diagnostic':
      return 'red'
    case value === 'likely diagnostic':
      return 'orange'
    case value.includes('inconclusive'):
      return 'blue'
    case value.includes('negative'):
      return 'green'

    // Contributions
    case value === 'associated':
      return 'red'
    case value === 'not associated':
      return 'green'
    case value.includes('finding'):
      return 'blue'
    case value === 'uncertain':
      return 'orange'
    case value === 'previously reported':
      return 'purple'
    case value === 'candidate':
      return 'pink'
    case value === 'not applicable':
      return 'grey'

    // Molecular values
    case value.includes('frameshift'):
      return 'red'
    case value.includes('stop') || value.includes('start'):
      return 'red'
    case value.includes('missense'):
      return 'blue'
    case value.includes('splice'):
      return 'red'
    case value.includes('insert') || value.includes('deletion'):
      return 'blue'

    // Priority values
    case value === 'stat':
      return 'red'
    case value === 'urgent':
      return 'orange'
    case value === 'routine':
      return 'black'

    // Gene Validity values
    case value === 'definitive':
      return 'green'
    case value === 'moderate':
      return 'orange'
    case value === 'limited':
      return 'red'

    case ['yes', 'true', true].includes(value):
      return 'green'

    case ['no', 'false', false].includes(value):
      return 'red'

    default:
      return 'black'
  }
}

export default getColor
