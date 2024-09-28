import styled from "styled-components";
import PropTypes from "prop-types";

export default function Container({ children }) {
  return <Content>{children}</Content>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = styled.div`
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
`;
