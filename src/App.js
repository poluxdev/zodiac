import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importa tu archivo CSS aquí
import Ascendente from './components/Ascendente';
import Solar from './components/Solar';
import Lunar from './components/Lunar';

const App = () => {
  const [ascendant, setAscendant] = useState('');
  const [solarSign, setSolarSign] = useState('');
  const [lunarSign, setLunarSign] = useState('');

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Selecciona los signos de tu carta astral</h1>
      <Row className="mb-3">
        <Col>
          <Ascendente ascendant={ascendant} onChange={(e) => setAscendant(e.target.value)} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Solar solarSign={solarSign} onChange={(e) => setSolarSign(e.target.value)} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Lunar lunarSign={lunarSign} onChange={(e) => setLunarSign(e.target.value)} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
