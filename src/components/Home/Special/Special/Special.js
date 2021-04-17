import React from 'react';
import { Container, Row } from 'react-bootstrap';
import datas from '../../../../Data/specialData'
import SpecialDataCard from '../SpecialDataCard/SpecialDataCard';

const Special = () => {
  return (
    <div className="my-5">
      <h1 className="text-center text-success mb-5">Why Choose Us</h1>
      <Container>
        <Row className="">
          {
            datas.map(data => <SpecialDataCard data={data} key={data.id} />)
          }
        </Row>
      </Container>
    </div>

  );
};

export default Special;