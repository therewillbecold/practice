import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onPlus } = this.props;
    console.log('Counters-rendered')
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={counter.selected}
            onDelete={onDelete}
            onPlus={onPlus}
            counter={counter}
          >
            {/* <h3>hello #{counter.id}</h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
