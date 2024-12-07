import './App.css';
import styled from 'styled-components';

type StyledBoxPropsType = {
    width: string;
    border?: string;
    margin?: string;
};

function App() {
    return (
        <Card>
            <Box width={'280px'} border={'15px'} margin={'20px'}>
                <img src="./assets/images/photo-of-desert.jpg" alt="desert" />
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
    background-color: #ffffff;
`;

const Box = styled.div<StyledBoxPropsType>`
    max-width: ${(props) => props.width};
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: ${(props) => props.border};
    margin-bottom: ${(props) => props.margin};
`;

const Title = styled.h2`
    font-size: 16px;
    font-wight: bold;
    text-align: center;
    color: #000000;
`;

const Paragraph = styled.p`
    font-size: 12px;
    font-wight: medium;
    text-align: left;
    color: #abb3ba;
`;
