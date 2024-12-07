import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <Card>
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
`

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;