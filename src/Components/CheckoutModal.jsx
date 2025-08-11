import { useContext, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutModal = ({ cartSummary, courseTitles, isCheckOut , course }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const { setCart } = useContext(CartContext);

    const [showPopup, setShowPopup] = useState(false);
    const handlePayment = (e) => {
        e.preventDefault(); //prevent refreshing on submitting
        setShow(false); //close modal
        setShowPopup(true); // show popup
        setTimeout(() => {
            setShowPopup(false); // Auto close after 2 seconds
            setCart([]);
            navigate("/");
        }, 1000);
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        upiId: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <>
            {
                isCheckOut ? (
                    <Button onClick={handleShow} variant="success" className="p-2 w-100">
                        Proceed to Checkout
                    </Button>
                ) : (
                    <Button onClick={handleShow} variant="warning" className="btn-lift text-white rounded-pill">
                        Buy Now
                    </Button>
                )
            }


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout Details</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handlePayment}>
                    <Modal.Body>
                        {/* Full Name */}
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                pattern="^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                                required
                            />
                        </Form.Group>

                        {/* Phone */}
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                placeholder="Enter your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                required
                            />
                        </Form.Group>

                        {/* Payment Method */}
                        <Form.Group className="mb-3">
                            <Form.Label>UPI</Form.Label>
                            <Form.Control
                                type="text"
                                name="upiId"
                                placeholder="Enter your UPI ID (e.g., name@upi)"
                                value={formData.upiId}
                                onChange={handleChange}
                                pattern="^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$"
                                required
                            >
                            </Form.Control>
                        </Form.Group>

                        
                                {/* Cart Checkout and CourseDetail Checkout Summary */ }
                                < div className="border bg-warning p-3 rounded">
                                    <Row className="mb-1">
                                        <Col xs="auto" >
                                            <span className="">Course Taken:</span>
                                        </Col>
                                        <Col>
                                            <strong className="d-flex justify-content-end">{courseTitles?.join(", ") || course.title}</strong>
                                        </Col>
                                    </Row>

                                    <p className="mb-1 d-flex justify-content-between">Price: <span>₹{cartSummary?.totalPrice || course.discountedPrice}</span></p>
                                    <p className="mb-1 d-flex justify-content-between">Discount: <span>-₹{cartSummary?.discount || 50 }</span></p>
                                    <p className="mb-0 fw-bold  d-flex justify-content-between">
                                        Final Amount: <span className="fs-5">₹{cartSummary?.finalAmount || course.discountedPrice - 50}</span>
                                    </p>
                                </ div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="success">
                            Confirm & Pay
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal >

            {
                showPopup && (
                    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
                        <div className="bg-success text-white p-5 rounded text-center shadow">
                            <FaCheckCircle size={60} className="mb-3 bg-white text-success rounded-circle p-1" />
                            <h3>Payment Successfull!</h3>
                            <h4>You are Enrolled!</h4>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CheckoutModal;
