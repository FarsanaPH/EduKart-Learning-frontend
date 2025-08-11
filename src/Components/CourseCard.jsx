import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CartModal from './CartModal';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


const CourseCard = ({ course, isCart }) => {
    const navigate = useNavigate();

    const { removeFromCart } = useContext(CartContext) //react context used

    return (
        <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="shadow rounded-4 ">
                <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                    className="rounded-top-4"
                    style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
                <Card.Body className="d-flex flex-column">
                    {/* Title + Description */}
                    <div className="mb-1">
                        <Card.Title className="fw-semibold text-start text-dark">{course.title}</Card.Title>
                        {
                            isCart ? "" : (
                                <Card.Text className="text-muted text-start small">{course.description}</Card.Text>
                            )
                        }

                    </div>

                    {/* Price + Rating */}
                    <div className="mt-auto mb-3  ">
                        <div className="d-flex align-items-center gap-2">
                            <span className="fw-semibold fs-4">
                                ₹{course.discountedPrice}
                            </span>
                            <span className="text-decoration-line-through fw-semibold text-danger">
                                ₹{course.originalPrice}
                            </span>
                        </div>
                        <div className='text-start d-flex align-items-center gap-2'>
                            <Badge bg="success d-flex align-items-center gap-1"> {course.rating} <FaStar /> </Badge>
                            <small className="text-muted">({course.reviews} reviews)</small>
                        </div>
                    </div>

                    {/* Add to Cart + Details/Remove Button */}
                    <div className="d-flex gap-2 mt-auto">
                        <Button onClick={() => navigate(`/coursedetail/${course.id}`)} variant="outline-primary" className="btn-lift rounded-pill w-50">
                            Details
                        </Button>
                        {
                            isCart ? (
                                <Button onClick={() => removeFromCart(course.id)} variant="danger" className="btn-lift rounded-pill ">
                                    Remove from Cart  {/* remove from cart fnc called here -take from react context where setState cart with the removing course */}
                                </Button>
                            ) : (
                                <CartModal course={course} />  // add to cart button here
                            )
                        }

                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
};

export default CourseCard;
