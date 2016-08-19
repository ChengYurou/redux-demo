import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({

    add:function () {
        this.props.onAdd();
    },
    render: function(){
        return (
            <div>
                <span id="value">{this.props.value}</span>
                <button id="add" onClick={this.add}>+</button>
            </div>
        )
    }
});

export default App;