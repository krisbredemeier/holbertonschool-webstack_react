import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Counter from './components/Counter.jsx';

ReactDOM.render(<App counterValue={333} />, document.getElementById('root'));
