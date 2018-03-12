import styled from 'styled-components';

const Grid = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;

  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`;

export default Grid;
