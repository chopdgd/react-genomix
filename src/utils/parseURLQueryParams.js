import { map } from 'lodash'
import { parse } from 'query-string'

export const parseUrlQueryParams = (searchUrl, array_keys = []) => {
  const params = parse(searchUrl)
  const defaults = {}
  map(params, (value, key) => {
    if (array_keys.includes(key)) {
      if (Array.isArray(value)) defaults[key] = value
      else defaults[key] = [value]
    } else {
      defaults[key] = value
    }
  })
  return defaults
}

export default parseUrlQueryParams
