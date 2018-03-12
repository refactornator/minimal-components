import styled from 'styled-components';

function calculateWidth(size) {
  return `calc(100% - (100% / 8) * ${Math.abs(8 - size)})`;
}

const Column = styled.div`
  padding: 0 8px;
  flex: 0 1 ${props => calculateWidth(props.size)};
`;

export default Column;
