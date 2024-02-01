import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/Navbar";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 64px auto;
`;
