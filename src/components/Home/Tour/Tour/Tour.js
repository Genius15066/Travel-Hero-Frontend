import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourCard from '../TourCard/TourCard';

const Tour = () => {
   const [tours, setTours] = useState([]);

   useEffect(() => {
      fetch('https://limitless-castle-39279.herokuapp.com/tours')
         .then(res => res.json())
         .then(data => setTours(data))
   }, [tours._id])
   return (
      <Container>
         <div className="text-center">
            <h6>Take a look at our </h6>
            <h2>Most Popular Tours</h2>
         </div>
         <Row>
            {
               tours.map(data => <TourCard data={data} key={data._id} />)
            }
         </Row>
      </Container>
   );
};

export default Tour;