import { useEffect, useState } from 'react'
import { type UseGoToTop } from '../types'
const useGoToTop = (): UseGoToTop => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return [isVisible, scrollToTop]
}

export default useGoToTop
