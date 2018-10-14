// irmc = shortcut
import React, { Component } from "react";

// Stateless functional Component  sfc
const NavBar = ({ totalCounters }) => {
  console.log("NavBar-rendered");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Total{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

// cc = shortcut  life circle can only be used in class Component
// class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             Total{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       </div>
//     );
//   }
// }

export default NavBar;
