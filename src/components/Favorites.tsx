import styled from "styled-components";
import { useAppSelector } from "../hooks/useRedux";
import Card from "./Card";
import { selectFavoriteCats } from "../redux/selectors";

const Favorites: React.FC = () => {
  const favorites = useAppSelector(selectFavoriteCats);

  return (
    <Container>
      {favorites.length > 0 &&
        favorites.map(({ id, url, isLiked }) => (
          <Card
            key={id}
            id={id}
            isLiked={isLiked}
            url={url}
          />
        ))}
    </Container>
  );
};

export default Favorites;

const Container = styled.div`
  position: relative;
  padding: 62px 62px 124px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  grid-gap: 2rem;
  justify-content: space-between;
`;
