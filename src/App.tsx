import './App.css';
import styled from 'styled-components';
import { myTheme } from './styles/Theme.styled';

type StyledBoxPropsType = {
    width: string;
    border?: string;
    margin?: string;
    content?: string;
};

type StyledImagePropsType = {
    src: string;
    alt: string;
};

type StyledButtonPropsType = {
    color: string;
    background: string;
};

function App() {
    return (
        <Card>
            <Box width={'280px'} border={'15px'} margin={'20px'}>
                <Image src="./assets/images/photo-of-desert.jpg" alt="desert" />
            </Box>
            <Box width={'70px'} margin={'20px'}>
                <Title>Headline</Title>
            </Box>
            <Box width={'260px'} margin={'20px'}>
                <Paragraph>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                    molestie ornare in venen.
                </Paragraph>
            </Box>
            <Box width={'192px'} margin={'20px'} content={'space-between'}>
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
        </Card>
    );
}

export default App;

const Card = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background-color: ${myTheme.colors.white};
`;

const Box = styled.div<StyledBoxPropsType>`
    max-width: ${(props) => props.width};
    display: flex;
    justify-content: ${(props) => props.content || 'start'};
    align-items: center;
    border-radius: ${(props) => props.border};
    margin-bottom: ${(props) => props.margin};
`;

const Image = styled.img<StyledImagePropsType>`
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;

const Title = styled.h2`
    font-size: 16px;
    font-wight: bold;
    text-align: center;
    color: ${myTheme.colors.black};
`;

const Paragraph = styled.p`
    font-size: 12px;
    font-wight: medium;
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
    font-wight: bold;
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};
`;
