import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
// import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("APP-Constructor");
  }
  componentDidMount() {
    //ajax
    //   this.setState({})
    console.log("APP-Mounted");
  }

  handlePlus = counter => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    counters[idx].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
 
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  render() {
    console.log("APP-rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onPlus={this.handlePlus}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
