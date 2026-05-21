export type NavLink = {
  label: string
  href: string
}

export type ExperienceItem = {
  role: string
  period: string
  detail: string
  organization?: string
}

export type ProjectItem = {
  title: string
  type: string
  summary: string
  accent: string
  repoHref?: string
  liveHref?: string
}

export type SocialLink = {
  label: string
  href: string
}

export type TechItem = {
  label: string
  icon: string
  className: string
}

export type ContactInfo = {
  email: string
  phone: string
  github: string
  linkedin: string
}

export type EducationItem = {
  title: string
  place: string
  period: string
}

export type CourseItem = {
  title: string
  provider: string
  period: string
  detail: string
}

export type LanguageItem = {
  name: string
  level: string
}
