import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TourCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TourCard = (props) => {
    const { img, description, price, duration, name } = props.data;
    return (
        <Col md={4}>
            <div className="tour-container">
                <div className="tour-img">
                    <img src={img} className="w-100 tour-img" alt="" />
                </div>
                <div className="tour-price">
                    <h4 className="price">$ {price}/<small className="special-text">per person</small></h4>
                </div>
            </div>

            <div className="tour-info">
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="footer-style">
                     <small>  <FontAwesomeIcon  icon={faClock} /> {duration-1} night {duration} days </small>
                    </Card.Footer>
                </Card>
            </div>

        </Col>
    );
};

export default TourCard;