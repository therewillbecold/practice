import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
    state = {
        name: '',
        country: 'Italy'
    }
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    render() {
        return <div>
            <div className='form'>
                <p>
                    <label>
                        Name:
        <input type="text" placeholder='name' value={this.state.name} onChange={this.nameChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Country:
                        <select value={this.state.country} onChange={(event) => this.setState({ country: event.target.value })}>
                        <option value="China">China</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        </select>
                    </label>
                </p>
            </div>
            <div className="display">
                <p>姓名: {this.state.name}</p>
                <p>国家: {this.state.country}</p>
            </div>
        </div>
    }
}

// class Form extends React.Component {
//     state = {
//         username: '',
//         country: 'India'
//     }
//     usernameChange = event => {
//         this.setState({ username: event.target.value })
//     }
//     render() {
//         return <div>
//             <div className="form">
//                 <p>
//                     <label>
//                         username:
//                         <input type="text" placeholder="username" value={this.state.username} onChange={this.usernameChange} />
//                     </label>
//                 </p>
//                 <p>
//                     <label>
//                         country:
//                         <select value={this.state.country} onChange={event => this.setState({ country: event.target.value })}>
//                             <option value="China">China</option>
//                             <option value="US">US</option>
//                             <option value="UK">UK</option>
//                             <option value="India">India</option>
//                         </select>
//                     </label>
//                 </p>
//             </div>

//             <div className="display">
//                 <p>用户名: {this.state.username}</p>
//                 <p>country: {this.state.country}</p>
//             </div>

//         </div>
//     }
// }

const ele = <div>
    <Form></Form>
</div>

ReactDOM.render(ele, document.querySelector('#form'))