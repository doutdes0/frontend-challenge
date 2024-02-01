import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getCats } from "../redux/thunks";
import { selectCatsValues } from "../redux/selectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const cats = useAppSelector(selectCatsValues);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      setIsLoading(true);
      dispatch(getCats());
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  useEffect(() => {
    if (cats.length < 1) {
      dispatch(getCats());
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container>
      {cats.map(({ id, isLiked, url }) => (
        <Card
          key={id}
          id={id}
          isLiked={isLiked}
          url={url}
        />
      ))}
      {isLoading && <div className="loader">..загружаем еще котиков...</div>}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  padding: 62px 62px 124px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  grid-gap: 2rem;
  justify-content: space-between;
  .loader {
    position: absolute;
    bottom: 62px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
