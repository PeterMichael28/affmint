
import './App.css'
import Banner from './components/Banner';
import Customers from './components/Customers';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import Footer from './components/Footer';


import './fonts/AvenirLTStd-Black.otf'
import './fonts/AvenirLTStd-Book.otf'
import './fonts/AvenirLTStd-Roman.otf'



function App() {

  return (
    <>
  {/* header */}
    <Header />
  {/* main */}
      <main>
        <Hero />
        <LogoSection />
        <GetStarted />
        <Banner />
        <Customers />
      </main>
      
      {/* footer */}
  <Footer />
    </>
  )
}

export default App
