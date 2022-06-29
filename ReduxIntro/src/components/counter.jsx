import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    }; 
    render() {
        console.log('props', this.props); 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary m-2" onClick={this.goIncrement}>Increment</button>
            </React.Fragment>
        );
    }
    goIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    getBadgeClasses () {
        let classes = "badge m-2 btn-"
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;