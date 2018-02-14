import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, it will produce HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's genereated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));