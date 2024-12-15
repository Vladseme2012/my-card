import styled from "styled-components";

type StyledBoxPropsType = {
  width: string;
  padding?: string;
  margin?: string;
  justify?: string;
};

export const Box = styled.div<StyledBoxPropsType>`
    max-width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    display: flex;
    justify-content: ${(props) => props.justify || 'start'};
    align-items: center;
    margin: ${(props) => props.margin};
`;