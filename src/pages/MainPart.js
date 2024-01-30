import { Container } from "react-bootstrap";

export default function MainPart({ children }) {
  return (
    <Container
      fluid
      className="mainpart d-flex flex-column justify-content-center align-items-center"
    >
      <h1>Your Favorite store with trend brands in one place</h1>
      <h2>Find what you look for faster</h2>
      {children}
    </Container>
  );
}
