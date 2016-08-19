import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {value,onAdd,onSub} = this.props;
        return (
            <div>
                <span id="value">{value}</span>
                <button id="add" onClick={onAdd}>+</button>
                <button id="sub" onClick={onSub}>-</button>
            </div>
        )
    }
}

export default App;