import './App.css';
import styled from 'styled-components';

type StyledBoxPropsType = {
  width: string;
  border?: string;
}


function App() {
    return (
        <Card>
          <Box width={'280px'} border={'15px'}>

          </Box>
            <Title>Welcome to IT-INCUBATOR</Title>
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
background-color: #FFFFFF;
`;

const Box = styled.div<StyledBoxPropsType>`
max-width: ${props => props.width};
display: flex;
justify-content: start;
align-items: center;
border-radius: ${props => props.border}
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;