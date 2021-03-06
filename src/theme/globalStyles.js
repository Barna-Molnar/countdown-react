import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Red Hat Text', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  --color-grayishBlue: hsl(237, 18%, 59%);
  --color-softRed: hsl(345, 95%, 68%);
  --color-white: hsl(0, 0%, 100%);
  --color-blue: hsl(236, 21%, 26%);
  --color-darkBlue: hsl(235, 16%, 14%);
  --color--veryDark: hsl(234, 17%, 12%);
  --fontSize: 14px;
  --fontWeight: 700;
}
`;

export default GlobalStyle;