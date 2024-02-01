import styled from "styled-components";
import LikeButton from "./LikeButton";

interface Props {
  id: string;
  isLiked: boolean;
  url: string;
}

const Card: React.FC<Props> = ({ url, isLiked, id }) => {
  return (
    <Container>
      <div className="scale">
        <img
          src={url}
          alt="cat"
        />
        <LikeButton
          id={id}
          isLiked={isLiked}
        />
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 225px;
  width: 225px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s;
  .scale > img {
    height: 225px;
    width: 225px;
    object-fit: cover;
  }
  .scale {
    transition: all 0.5s;
  }
  &:hover {
    scale: 1.14;
    box-shadow: 0px 9px 18px 0px #0000002e;
    box-shadow: 0px 6px 5px 0px #0000003d;
  }
  &:hover .scale > div {
    opacity: 1;
  }
  &:hover .scale {
    scale: 0.877;
  }
`;
