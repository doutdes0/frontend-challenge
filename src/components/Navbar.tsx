import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar: React.FC = () => {
  const currLocation = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const nodes = document.getElementsByClassName("link");
    for (let node of nodes) {
      if (node.getAttribute("data-link") === currLocation) {
        node.classList.add("active");
      } else {
        node.classList.remove("active");
      }
    }
  }, [currLocation]);

  return (
    <Container>
      <div
        data-link="/"
        className="link"
        onClick={() => navigate("/")}
      >
        <NavLink to="/">Все котики</NavLink>
      </div>
      <div
        data-link="/favorites"
        className="link"
        onClick={() => navigate("/favorites")}
      >
        <NavLink to="/favorites">Любимые котики</NavLink>
      </div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: start;
  background-color: var(--nav-blue);
  padding-left: 62px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  .link {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1.5rem;
    cursor: pointer;
  }
  .link a {
    text-decoration: none;
    color: var(--white);
    opacity: 0.8;
  }
  a.active {
    opacity: 1;
  }
  .link.active {
    background-color: var(--nav-blue_picked);
  }
`;
