import styled from "styled-components";
import PropTypes from "prop-types";
import Character from "./Character";

export default function CharacterContainer(props) {
  const { characters, reqApi } = props;

  return (
    <>
      <ContainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </ContainerCharacter>
      <ContainerButton>
        <Button onClick={reqApi}>Recargar Personajes</Button>
      </ContainerButton>
    </>
  );
}

CharacterContainer.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
  reqApi: PropTypes.func.isRequired,
};

const ContainerCharacter = styled.div`
  display: flex;
`;

const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 250px;
  background-color: #e76f51;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 40px;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #1c0950;
  }
`;
