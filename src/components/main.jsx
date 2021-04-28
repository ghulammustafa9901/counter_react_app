import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";

class Main extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (countObj) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((obj) => obj.id == countObj.id);
    // counters[index] = { ...countObj };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDetele = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDetele}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
