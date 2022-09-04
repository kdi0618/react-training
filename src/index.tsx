/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom/client";
import { css, Global } from "@emotion/react";
import { TodoApp } from "./components/pages/TodoApp/TodoApp";
import reportWebVitals from "./reportWebVitals";

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #dcdcdc;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }

  textarea {
    resize: vertical;
  }

  input[type="checkbox"],
  input[type="radio"] {
    display: none;
  }

  input[type="submit"],
  input[type="button"],
  label,
  button,
  select {
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a,
  a:active {
    color: #000000;
    text-decoration: none;
    &:focus {
      outline: none;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <TodoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
