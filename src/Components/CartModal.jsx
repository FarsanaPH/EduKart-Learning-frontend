import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function CartModal({ course, isDetails }) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        addToCart(course); // add to cart here -take from react context where setState cart with the now added course
        setShow(true);
    }
    return (
        <>
            {/* Add to cart button */}
            {
                isDetails ? (
                    <Button onClick={handleShow} variant="primary" className="btn-lift rounded-pill" >
                        Add to Cart
                    </Button>

                ) : (
                    <Button onClick={handleShow} variant="primary" className="btn-lift rounded-pill w-50" >
                        Add to Cart
                    </Button>

                )
            }


            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Course Added to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <strong>"{course.title}"</strong> has been added to your cart.
                    <div className='d-flex justify-content-end gap-2 my-2'>
                        <Button variant="danger" onClick={handleClose}>
                            Back to Courses
                        </Button>

                        <Button variant="success" onClick={() => navigate("/cart")}>
                            Go to Cart
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CartModal