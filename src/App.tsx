import { ContactSection } from './components/ContactSection/tsx/ContactSection'
import { ExperienceSection } from './components/ExperienceSection/tsx/ExperienceSection'
import { HeroSection } from './components/HeroSection/tsx/HeroSection'
import { IntroSection } from './components/IntroSection/tsx/IntroSection'
import { Navigation } from './components/Navigation/tsx/Navigation'
import { OrbitalSignature } from './components/OrbitalSignature/tsx/OrbitalSignature'
import { ProjectsSection } from './components/ProjectsSection/tsx/ProjectsSection'
import { ScrollToTopButton } from './components/ScrollToTopButton/tsx/ScrollToTopButton'
import { TrainingSection } from './components/TrainingSection/tsx/TrainingSection'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <main className="portfolio-shell">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <TrainingSection />
      <ExperienceSection />
      <OrbitalSignature />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTopButton />
    </main>
  )
}

export default App
