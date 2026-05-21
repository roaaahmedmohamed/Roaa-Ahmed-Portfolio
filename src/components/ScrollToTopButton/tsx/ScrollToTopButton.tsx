import { memo, useEffect, useState } from 'react'
import '../css/ScrollToTopButton.css'

export const ScrollToTopButton = memo(function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateVisibility = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 420)
      })
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`scroll-top-button${isVisible ? ' is-visible' : ''}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
      </svg>
    </button>
  )
})
