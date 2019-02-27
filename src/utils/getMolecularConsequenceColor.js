const getMolecularConsequenceColor = consequence => {
  // NOTE: Using Ensembl VEP rankings
  // See: https://useast.ensembl.org/info/genome/variation/predicted_data.html

  switch (true) {
    case consequence.includes('frameshift'):
      return 'red'
    case consequence.includes('stop') || consequence.includes('start'):
      return 'red'
    case consequence.includes('missense'):
      return 'orange'
    case consequence.includes('splice'):
      return 'blue'
    case consequence.includes('insert') || consequence.includes('deletion'):
      return 'black'
    default:
      return 'grey'
  }
}

export default getMolecularConsequenceColor
