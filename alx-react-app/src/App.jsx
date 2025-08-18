import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age="johmk"
        bio="Loves hiking and photography"
      />
      <Footer />
    </>
  )
}

export default App