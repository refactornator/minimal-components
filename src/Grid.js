import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  padding: 0 8px;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`;

export default Grid;
