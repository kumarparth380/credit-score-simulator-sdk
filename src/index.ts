// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import "./styles/tailwind.css"

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

const defaultTheme = {
  // colors: {
  //   primary: "#1D4ED8", // Blue color
  //   secondary: "#4B5563", // Grey color
  //   backgroundColor: "#f3f4f6", // Light background
  //   textColor: "#111827", // Dark text
  // },
};

const embedSimulator = (containerId: string, theme = defaultTheme) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App, { theme }));
  }
};

embedSimulator("credit-score-simulator");

export { embedSimulator };
