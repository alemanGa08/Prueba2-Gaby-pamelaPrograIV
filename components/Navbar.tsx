import React, { useState } from 'react';
import { Navbar, Nav, Modal, Card } from 'react-bootstrap';

type Props = {
  handleSearch: () => Promise<void>;
  handlePersonal: () => void;
  activeTab: string;
};

const MyNavbar = ({ handleSearch, handlePersonal, activeTab }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showOpenAIModal, setShowOpenAIModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleCloseAboutModal = () => setShowAboutModal(false);
  const handleCloseAboutOpenAI = () => setShowOpenAIModal(false);

  const handleShowModal = () => setShowModal(true);
  const handleShowAboutModal = () => setShowAboutModal(true);
  const handleShowOpenAIModal = () => setShowOpenAIModal(true);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={handleShowAboutModal}>Sobre Nosotros</Nav.Link>
            
            <Nav.Link onClick={handleShowModal}>Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal para Contáctanos */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contactanos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>Bienvenido a nuestra aplicación</h1>
            <p>En esta aplicación consumiremos la API de OpenAI para generar recetas</p>
            <img src="/contactenos.png" alt="Contactenos" style={{ maxWidth: '300px' }} />
            <p>Puede contactarnos a través de:</p>
            <ul>
              <li>Teléfono: 85179240, 87460160</li>
              
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleCloseModal}>
            Salir
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Sobre nosotros */}
      <Modal show={showAboutModal} onHide={handleCloseAboutModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sobre nosotros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img src="/pregunta.png" alt="Preguntas" />
            <Card.Body>
              <Card.Title>
                Esta pagina web fue diseñada para generar recetas a través del consumo de la API de Open AI
              </Card.Title>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleCloseAboutModal}>
            Salir
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal para OpenAI*/}
      <Modal show={showOpenAIModal} onHide={handleCloseAboutOpenAI} centered>
        <Modal.Header closeButton>
          <Modal.Title>OpenAI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Aquí se brinda información sobre OpenAI</h1>
          <Card>
            <Card.Img src="/chat2.png" alt="Chat" />
            <Card.Body>
              <Card.Title>
                OpenAI es una empresa de inteligencia artificial que desarrolla tecnologías como ChatGPT, un modelo de lenguaje avanzado con capacidad de conversación. ChatGPT es capaz de generar respuestas coherentes y contextuales, facilitando la interacción con los usuarios en diversos escenarios.
              </Card.Title>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleCloseAboutOpenAI}>
            Salir
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyNavbar;
