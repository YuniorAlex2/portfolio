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

      /* red */
  --color-red-700: #b91c1c;
  --color-red-600: #dc2626;
  --color-red-500: #ef4444;

    /* blue */
  --color-blue-900: #1e3a8a;
  
    /*grey */
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

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
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
    background-color: var(--color-dark-0);
    color: var(--color-grey-800);
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    line-height: 1.6;
}

 section {
    display: flex;
    flex-direction: column;
    height: 85%;
    align-items: center;
    justify-content: center;
    gap: 1.7rem;
    text-align: center;
  }

  section ul {
    display: flex;
    list-style: none;
    height: 25%;
    align-items: center;
    justify-content: center;
    gap: 2.3rem;
    text-align: center;
  }

`;

export default GlobalStyles;
