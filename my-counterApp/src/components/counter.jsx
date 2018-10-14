import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1"]
  // };

  //   constructor(){
  //       super()
  //       this.handlePlus = this.handlePlus.bind(this);
  //   }

  // handlePlus = product => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderList() {
  //   console.log("props: " + this.props);
  //   if (this.state.tags.length === 0) return <p>there is no tags ! </p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag} />
  //       ))}
  //     </ul>
  //   );
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from the servel
    }
  }

  componentWillUnmount() {
    console.log("Counter -Unmount ");
  }
  render() {
    // console.log(this.props);
    console.log("Counter-rendered");
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>

        <button
          onClick={() => this.props.onPlus(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Plus
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.props.counter.tags.length === 0 && "please create a new tag "}
        {this.renderList()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
