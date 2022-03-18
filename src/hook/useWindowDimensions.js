import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const viewportWidth = hasWindow ? window.innerWidth : null
    const viewportHeight = hasWindow ? window.innerHeight : null
    return {
      viewportWidth,
      viewportHeight
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
