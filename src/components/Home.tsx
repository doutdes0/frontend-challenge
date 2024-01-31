import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import Card from "./Card";

const Home: React.FC = () => {
  return (
    <Container>
      <Card url="https://cdn2.thecatapi.com/images/5r4.jpg" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 62px;
  display: flex;
  justify-content: start;
  gap: 1rem;
`;
