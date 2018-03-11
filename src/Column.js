import styled from 'styled-components';

function calculateWidth(size) {
  return `calc(100% - (100% / 8) * ${size - 8})`;
}

const Column = styled.div`
  width: calc(100% / 8);
  flex: 1 1 calc(100% / 8);
  padding: 0 8px;

  width: ${props => calculateWidth(props.size)};
  max-width: ${props => calculateWidth(props.size)};
  flex: 0 1 ${props => calculateWidth(props.size)};
`;

export default Column;
