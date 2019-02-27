import { useState, useEffect } from 'react'

export const getWindowSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth,
})

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function handleResize() {
    setWindowSize(getWindowSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
