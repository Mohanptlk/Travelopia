import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  position: relative;
  &::before {
    content: '';
    background-color: #333;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;
