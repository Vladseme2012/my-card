import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
background-color: ${myTheme.colors.gray}
}
`;
