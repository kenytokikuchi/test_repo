import React from 'react';
import ReactDOM from 'react-dom';

import Alert from './Alert.tsx';

const App = () => {
  return (
    <div style={{ color: 'black' }}>
      Hello, React App!
      <Alert message="Success!" />
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDOM.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
