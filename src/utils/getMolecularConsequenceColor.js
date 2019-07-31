import { toLower } from 'lodash'

const getMolecularConsequenceColor = value => {
  // NOTE: Using Ensembl VEP rankings
  // See: https://useast.ensembl.org/info/genome/variation/predicted_data.html
  const consequence = toLower(value)

  switch (true) {
    case consequence.includes('frameshift'):
      return 'red'
    case consequence.includes('stop') || consequence.includes('start'):
      return 'red'
    case consequence.includes('missense'):
      return 'blue'
    case consequence.includes('splice'):
      return 'red'
    case consequence.includes('insert') || consequence.includes('deletion'):
      return 'blue'
    default:
      return 'black'
  }
}

export default getMolecularConsequenceColor
