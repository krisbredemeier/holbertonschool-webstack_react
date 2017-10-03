import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

guillaume@ubuntu:~/0-counter/$
guillaume@ubuntu:~/0-counter/$ cat src/components/App.jsx
import React from 'react';
import Counter from './Counter.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Counter value={98} />
        <Counter />
      </div>);
  }
}
