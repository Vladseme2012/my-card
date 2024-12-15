import styled from 'styled-components';

export const FlexWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;

    @media (max-width: 999px) {
    flex-direction: column;
  }
`;
