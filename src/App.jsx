import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Stats from './components/Stats'
import Approach from './components/Approach'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Stats />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
