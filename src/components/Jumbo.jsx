import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import photo1 from '../assets/photo1.jpeg';

const Jumbo = props => {
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url(${photo1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          imageHeight: '400px'
        }}
        fluid
      >
        <Container>
          <h1 className="text-danger">Greg's Guardian</h1>

          <h4 className="text-dark">Read articles and leave comments.</h4>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
