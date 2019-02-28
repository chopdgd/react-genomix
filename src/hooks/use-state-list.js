import { useState } from 'react'
import { concat, without } from 'lodash'

const useStateList = (values = []) => {
  const [list, setState] = useState(values)

  const setList = value => {
    setState(prevState => {
      if (prevState.includes(value)) return without(prevState, value)
      else return concat(prevState, [value])
    })
  }

  const resetValues = (values = []) => setState(values)

  return [list, setList, resetValues]
}

export default useStateList
