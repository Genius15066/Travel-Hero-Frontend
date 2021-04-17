import React from 'react';
import { Container, Row } from 'react-bootstrap';
import tourData from '../../../../Data/tours'
import TourCard from '../TourCard/TourCard';

const Tour = () => {
    return (
       <Container>
         <div className="text-center">
           <h6>Take a look at our </h6>
           <h2>Most Popular Tours</h2>
         </div>
            <Row>
           { 
              tourData.map(data=><TourCard data={data}/>)
           } 
        </Row>
       </Container>
    );
};

export default Tour;