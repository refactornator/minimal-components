import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 8px;

  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`;

export default Grid;
