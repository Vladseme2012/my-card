import './App.css';
import { FlexWrapper } from './components/flexWrapper/FlexWrapper';
import { Card } from './components/card/Card';
import { data } from './assets/data/data';
import styled from 'styled-components';

function App() {
    return (
        <StyledSection>
            <FlexWrapper>
                {data.map((el) => (
                    <Card
                        src={el.image}
                        title={el.title}
                        text={el.text}
                        key={el.title}
                    />
                ))}
            </FlexWrapper>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default App;
