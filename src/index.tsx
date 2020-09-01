import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  title: string;
  color: string;
}

function App(props: AppProps) {
  return(
    <h1>{props.title}</h1>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App title="Hello?" color="blue" />
  </React.StrictMode>,
  document.getElementById('root')
);
