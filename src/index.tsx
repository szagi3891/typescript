import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

interface PropsType {
}

@observer
class App extends React.Component {

    @observable counter: number;
    @observable counter3: number;

    @computed get counter2(): string {
        return `dasdas ${this.counter + this.counter3} ,,dasdas`;
    }

    constructor(props: PropsType) {
        super(props);
        this.counter = 0;
        this.counter3 = 0;

        setInterval(() => {
            this.counter = this.counter + 1;
        }, 1000);

        setInterval(() => {
            this.counter3 += 5;
        }, 2000);
    }

    render() {
        return (
            <div>Witaj okrutny reactowy świecie {this.counter2}</div>
        );
    }
}

console.info('Start index.js');


const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App />, root);
}