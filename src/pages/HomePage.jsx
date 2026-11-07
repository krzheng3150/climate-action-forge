import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import AppsSection from '../components/AppsSection.jsx'
import Consultancy from '../components/Consultancy.jsx'
import InquirySection from '../components/InquirySection.jsx'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <>
      <Hero />
      <AppsSection />
      <Consultancy />
      <InquirySection />
    </>
  )
}
