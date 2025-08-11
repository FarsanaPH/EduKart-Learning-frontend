import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './index.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import AllCourses from './Pages/AllCourses'
import CourseDetail from './Pages/CourseDetail'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import CartPage from './Pages/CartPage'
import NewsLetter from './Components/NewsLetter'
import ScrollToTop from './Components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'



function App() {

  const location = useLocation()
  return (
    <>
      <div className="app-container">
        <Header />
        <ScrollToTop />
        <div className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/allcourses" element={<AllCourses />} />
              <Route path="/coursedetail/:id" element={<CourseDetail />} />  {/*The :id part is a URL parameter — it means that anything in the URL after /course/ is treated as a variable called id. */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}

export default App
