import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <button className="mt-4 btn btn-sm btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map((count) => (
          <Counter
            key={count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={count}
          >
            <h6>Title</h6>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
