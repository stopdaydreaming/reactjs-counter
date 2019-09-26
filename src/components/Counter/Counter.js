import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className="container">
                <div className="Counter border border-secondary rounded">
                    <div className="Counter-display d-flex align-items-center text-secondary">
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div className="Counter-button-panel d-flex flex-row">
                        <button className="btn btn-dark w-50" onClick={this.incrementCount}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-25" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-dark w-50" onClick={this.decrementCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

Counter.propTypes = {
    count: PropTypes.number
};

export default Counter;
