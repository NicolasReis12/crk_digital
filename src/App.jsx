import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Carrousel } from './components/Carrousel'

function App() {
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

export default App
