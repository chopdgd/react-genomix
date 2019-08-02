import { toLower } from 'lodash'

const getInterpretationColor = value => {
  const interpretation = toLower(value)

  switch (true) {
    case interpretation.includes('diagnostic'):
      return 'red'
    case interpretation.includes('incidental'):
      return 'blue'
    case interpretation.includes('negative'):
      return 'green'
    default:
      return 'black'
  }
}

export default getInterpretationColor
