import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters:
        [{id: 1, value:4},
        {id: 2, value:0},
        {id: 3, value:0}]
    };
    render () {
        //key, value, and selected are properties or props you defined yourself in line 16
        return (<div>
            {this.state.counters.map(counter => (
            <Counter key={counter.id} value={counter.value} selected={true}/>
            ))}
        </div>);
    }
}

export default Counters;