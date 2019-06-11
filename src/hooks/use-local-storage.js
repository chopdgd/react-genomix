import { useState } from 'react'

const setItem = (key, value) => {
  if (!['string'].includes(typeof value)) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

const getItem = key => {
  const item = window.localStorage.getItem(key)
  try {
    return JSON.parse(item)
  } catch (error) {
    return item
  }
}

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const item = getItem(key)
    if (item) {
      return item
    } else {
      setItem(key, defaultValue)
      return defaultValue
    }
  })

  const setValue = value => {
    if (typeof value === 'object' && typeof state === 'object') {
      setState({ ...state, ...value })
      setItem(key, { ...state, ...value })
    } else {
      setState(value)
      setItem(key, value)
    }
  }

  return [state, setValue]
}

export default useLocalStorage
