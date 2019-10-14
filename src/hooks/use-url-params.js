import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { parseUrlQueryParams } from '../utils/parseURLQueryParams'

export const useURLQueryParams = (array_keys = []) => {
  const { search } = useLocation()
  const parameters = useParams()
  return {
    queryParameters: useMemo(() => (search ? parseUrlQueryParams(search, array_keys) : {}), [search, array_keys]),
    parameters,
  }
}

export default useURLQueryParams
