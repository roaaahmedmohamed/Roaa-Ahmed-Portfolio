import { useEffect } from 'react'

const revealSelector =
  '.hero-section, .intro-block, .training-section, .experience-section, .orbital-section, .project-section, .contact-section'

export function useScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -16% 0px',
        threshold: 0.18,
      },
    )

    sections.forEach((section) => {
      section.classList.add('reveal-section')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
}
