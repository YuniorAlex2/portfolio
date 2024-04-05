import { createGlobalStyle } from "styled-components";

/* 
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap"
      rel="stylesheet"
    />
*/

const GlobalStyles = createGlobalStyle`

:root {
  --color-dark-0: #1d1d20;

  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    font-family: 'Monserrat', sans-serif;
    color: var(--color-grey-600);
    background-color: var(--color-dark-0);
    line-height: 1.6;
}
`;

export default GlobalStyles;
