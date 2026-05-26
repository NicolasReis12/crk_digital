import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Carrousel } from './components/Carrousel'
import { Links } from './pages/Links'

function Home() {
  return (
    <div className="min-h-dvh bg-ice text-navy antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Carrousel />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  )
}

export default App
