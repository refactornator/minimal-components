import styled from 'styled-components';

const Row = styled.div`
  flex: 1;
  margin: 8px;
  display: flex;

  justify-content: ${props => {
    switch (props.justify) {
      case 'start':
      default:
        return 'flex-start';
      case 'center':
        return 'center';
      case 'end':
        return 'flex-end';
    }
  }};
`;

export default Row;
