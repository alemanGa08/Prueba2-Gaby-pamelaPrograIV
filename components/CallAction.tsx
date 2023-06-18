import React from 'react';
import { Button } from 'react-bootstrap';

const CallAction = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <h2>¡Llámanos ahora!</h2>
      <p>Contáctanos para obtener más información</p>
      <Button variant="primary" size="lg">Llamar</Button>
    </div>
  );
};

export default CallAction;
