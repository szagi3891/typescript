import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>Witaj okrutny reactowy świecie</div>
        );
    }
}

console.info('Start index.js');


const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App />, root);
}