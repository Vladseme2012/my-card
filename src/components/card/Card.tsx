import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';
import { FlexWrapper } from '../flexWrapper/FlexWrapper';
import { Box } from '../box/Box';

type CardPropsType = {
  src: string;
  title: string;
  text: string;
  key: string;
}

type StyledImagePropsType = {
  src: string;
  alt: string;
};

type StyledButtonPropsType = {
  color: string;
  background: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <FlexWrapper>
      <StyledCard>
                <Box width={'280px'} margin={'0 0 20px'}>
                    <Image src={props.src} alt="desert" />
                </Box>
                <Box width={'70px'} padding={'0 0 0 10px'}>
                    <Title>{props.title}</Title>
                </Box>
                <Box width={'260px'} margin={'20px 0'} padding={'0 0 0 10px'}>
                    <Paragraph>
                        {props.text}
                    </Paragraph>
                </Box>
                <Box
                    width={'192px'}
                    margin={'0 0 20px'}
                    justify={'space-between'}
                    padding={'0 0 0 10px'}
                >
                    <Button
                        color={myTheme.colors.white}
                        background={myTheme.colors.blue}
                    >
                        See more
                    </Button>
                    <Button
                        color={myTheme.colors.blue}
                        background={myTheme.colors.white}
                    >
                        Save
                    </Button>
                </Box>
            </StyledCard>
    </FlexWrapper>
  );
};

const StyledCard = styled.article`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background-color: ${myTheme.colors.white};
`;

const Image = styled.img<StyledImagePropsType>`
    width: 280px;
    height: 170px;
    object-fit: cover;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: ${myTheme.colors.black};
`;

const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    color: ${myTheme.colors.gray};
`;

const Button = styled.button<StyledButtonPropsType>`
    width: 100%;
    max-width: 86px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid ${myTheme.colors.blue};
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};

    &:hover {
        cursor: pointer;
    }
`;

