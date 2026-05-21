import { memo } from 'react'
import { contactInfo } from '../../../data/portfolio'
import '../css/ContactSection.css'

const contactCards = [
  {
    title: 'LinkedIn',
    text: 'Connect with me professionally and follow my frontend journey.',
    href: contactInfo.linkedin,
    label: 'linkedin.com/in/roaaahmed6',
    icon: 'profile',
  },
  {
    title: 'GitHub',
    text: 'Explore my projects, code, and React frontend applications.',
    href: contactInfo.github,
    label: 'github.com/roaaahmedmohamed',
    icon: 'code',
  },
  {
    title: 'Call Me Directly',
    text: 'Available for frontend opportunities and interviews.',
    href: `tel:+20${contactInfo.phone.slice(1)}`,
    label: `+20 ${contactInfo.phone}`,
    icon: 'phone',
  },
] as const

function ContactIcon({ name }: { name: (typeof contactCards)[number]['icon'] }) {
  if (name === 'profile') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V7" />
        <path d="M20 19V7" />
        <path d="M3 19h18" />
        <path d="M7 19v-8h4v8" />
        <path d="M13 19v-6h4v6" />
        <path d="M3 7h18l-2-3H5z" />
      </svg>
    )
  }

  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 4.8 9 4l2 4-1.4 1.1a9.4 9.4 0 0 0 5.3 5.3L16 13l4 2-0.8 2.4c-.3.8-1 1.3-1.9 1.2A14.7 14.7 0 0 1 5.4 6.7c-.1-.9.4-1.6 1.2-1.9Z" />
    </svg>
  )
}

export const ContactSection = memo(function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-card">
        <p className="contact-pill">Reach Out To Me</p>
        <h2>Let us build something beautiful together.</h2>
        <p className="contact-lead">
          Have a React or Next.js project in mind? Reach out manually at{' '}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
        </p>

        <div className="contact-methods">
          {contactCards.map((card) => (
            <article className="contact-method" key={card.title}>
              <span className="contact-icon">
                <ContactIcon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href={card.href}>{card.label}</a>
            </article>
          ))}
        </div>
      </div>
    </footer>
  )
})
