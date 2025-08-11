import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import CourseCard from "../Components/CourseCard";
import CheckoutModal from "../Components/CheckoutModal";


function CartPage() {
  const { cart } = useContext(CartContext);

  // Calculation
  const totalCourses = cart.length;
  const totalPrice = cart.reduce((sum, course) => {
    return sum + course.discountedPrice  
  }, 0);
  const discount = cart.length * 50;
  const finalAmount = totalPrice - discount;

  const courseTitles = cart.map(course => course.title)
  const cartSummary = { totalCourses, totalPrice, discount, finalAmount };

  return (
    <>
      <div className="m-3 mb-5">
        <Container>
          <h2 >Your Cart</h2>
          {cart?.length === 0 ? (
            <p>No courses in cart.</p>
          ) : (
            <>

              {/* Cart Items */}
              <Row className="g-4 pt-3 text-center text-md-start">
                {cart.map((course) => (
                  <Col key={course.id} xs={12} md={3} >
                    <CourseCard course={course} isCart={true} />       {/*coursecard used here  */}
                  </Col>
                ))}
              </Row>

              {/* Cart Summary */}
              <Row className="mt-5 justify-content-center ">
                <Col xs={12} md={4} className="w-100 ">
                  <Card className="p-3 shadow-sm bg-light  m-md-4">
                    <h4 className="mb-3">Cart Summary</h4>
                    <p className="d-flex justify-content-between ">Total Courses: <strong >{totalCourses}</strong></p>
                    <p className="d-flex justify-content-between">Price: <strong>₹{totalPrice}</strong></p>
                    <p className="d-flex justify-content-between">Discount: <strong className="text-danger">-₹{discount}</strong></p>
                    <hr />
                    <p className="d-flex justify-content-between fs-5 fw-bold">Total Amount: <span className="text-success">₹{finalAmount}</span></p>
                    <CheckoutModal isCheckOut={true} cartSummary={cartSummary} courseTitles={courseTitles} />
                  </Card>
                </Col>
              </Row>

            </>
          )}
        </Container>
      </div>
    </>
  )
}

export default CartPage