
import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/edukart-logo.jpg';
import { CartContext } from '../Context/CartContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const { cart } = useContext(CartContext);

  // to scroll to top when hambergun icon clicks
  useEffect(() => {
    if (isOpen && window.innerWidth < 992) {
      // Delay to let AnimatePresence mount the element
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }, [isOpen]);


  return (
    <>
      {/* Fades In animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }} // Animate over 0.5s, but start after a 0.5s delay
      >
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm px-5">
          {/* Image Logo */}
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="EduKart" width="100" height="40" />
          </Navbar.Brand>

          {/* Mobile right side: Cart icon + Hamburger */}
          <div className="d-flex align-items-center gap-3 d-lg-none">
            {/* Cart icon */}
            <Nav.Link as={NavLink} to="/cart" className="position-relative text-dark  ">
              <FaShoppingCart size={25} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.65rem' }}
              >
                {cart.length}
              </span>
            </Nav.Link>

            {/* Hamburger Icon -visible on small screen only */}
            <Navbar.Toggle
              // aria-controls="navbar-nav"
              onClick={() => setIsOpen(prev => !prev)}
            />
          </div>



          {/* Desktop Naviagtion:Visible on large screen only ( normal collapse with div; Navbar.Collapse removed and id - On small screen cant be seen; on large screen display flex)*/}
          <div className="d-none d-lg-flex justify-content-between align-items-center w-100 ">
            {/* Center nav links */}
            <Nav className="mx-auto gap-5 fw-semibold" variant="underline" defaultActiveKey="/">
              <Nav.Link as={NavLink} className='orangelink' to="/" >Home</Nav.Link>
              <Nav.Link as={NavLink} className='orangelink' to="/allcourses" >Courses</Nav.Link>
              <Nav.Link as={NavLink} className='orangelink' to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} className='orangelink' to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Right cart and auth links  */}
            <div className="d-flex align-items-center gap-3">
              {/* Cart icon with count badge */}
              <Nav.Link as={NavLink} to="/cart" className="position-relative text-dark">
                <FaShoppingCart size={20} />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.65rem' }}
                >
                  {cart.length}
                </span>
              </Nav.Link>
              {/* auth links */}
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Button as={NavLink} to="/signup" variant="primary" className='px-3 fw-semibold rounded-pill'>
                Sign Up
              </Button>
            </div>
          </div>
        </Navbar>
      </motion.div>


      {/* On Mobile: Animated */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="d-lg-none fw-semibold m-3 "  //cant seen in large screen
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Nav className="flex-column gap-3 bg-warning rounded px-4 py-3 text-uppercase text-center fw-bold ">
              <Nav.Link as={NavLink} to="/" className='text-light' onClick={closeMenu}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/allcourses" className='text-light' onClick={closeMenu}>Courses</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className='text-light' onClick={closeMenu}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className='text-light' onClick={closeMenu} >Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/login" className='text-light' onClick={closeMenu} >Login</Nav.Link>
              <Nav.Link as={NavLink} to="/signup" className='text-light' onClick={closeMenu}>Sign Up</Nav.Link>
            </Nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
