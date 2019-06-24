import { useEffect, useState } from 'react'

const setItem = (key, value) => {
  if (!['string'].includes(typeof value)) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

const getItem = key => {
  const item = localStorage.getItem(key)
  try {
    return JSON.parse(item)
  } catch (error) {
    return item
  }
}

export const useLocalStorage = (key, defaultValue) => {
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

  const localStorageChanged = e => {
    if (e.key === key) {
      let value
      try {
        value = JSON.parse(e.newValue)
      } catch (e) {
        value = e.newValue
      }

      let newValue
      if (typeof value === 'object' && typeof state === 'object') {
        newValue = { ...state, ...value }
      } else {
        newValue = value
      }
      setState(newValue)
    }
  }

  useEffect(() => {
    window.addEventListener('storage', localStorageChanged)

    return () => {
      window.removeEventListener('storage', localStorageChanged)
    }
  })

  useEffect(() => {
    setState(getItem(key))
  }, [key])

  return [state, setValue]
}

export default useLocalStorage
