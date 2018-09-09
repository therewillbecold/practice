import React from 'react'
import reactDOM from 'react-dom'

class Form extends React.Component {
    state = {
        name: '',
        country: ''
    }
    render() {
        return <div>
            <div className="form">
                <p>
                    <label>Name:
        <input type="text" placeholder='name' value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    </label>
                </p>
                <p>
                    <label>
                        <select value={this.state.country} onChange={(event) => { this.setState({ country: event.target.value }) }}>Country:
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
            <div>
                <p>Conform your INFO </p>
                <p>Name:{this.state.name}</p>
                <p>Country:{this.state.country}</p>
            </div>

        </div>
    }
}

class Add extends React.Component {
    state = {
        num1: '',
        num2: ''
    }
    render() {
        return <div>加法:
            <p><input type="text" style={{ width: '50px', marginRight: '5px', float: 'left' }} value={this.state.num1} onChange={(event) => { this.setState({ num1: event.target.value }) }} /></p>
            <p style={{ float: 'left', marginTop: '1px' }}>+</p>
            <p><input type="text" style={{ width: '50px', marginRight: '5px', float: 'left' }} value={this.state.num2} onChange={(event) => { this.setState({ num2: event.target.value }) }} /></p>
            <p style={{ float: 'left', marginTop: '1px' }}>=</p>
            <p><input type="text" style={{ width: '50px', marginRight: '5px', float: 'left' }} value={Number(this.state.num1) + Number(this.state.num2)} /></p>
        </div>
    }
}


const ele = <div>
    <Form></Form>
    <Add></Add>
</div>






// class Form extends React.Component {
//     state={
//         name:'',
//         country:''
//     }
//     render() {
//         return <div>
//             <div className="form">
//                 <p>
//                     <label> Name:
//                     <input type="text" placeholder='name' value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} />
//                     </label>
//                 </p>
//                 <p>
//                     <label> Country:
//                     <select value={this.state.country} onChange={(event)=>this.setState({country:event.target.value})} >
//                             <option value="China">China</option>
//                             <option value="US">US</option>
//                             <option value="UK">UK</option>
//                             <option value="Italy">Italy</option>
//                             <option value="Spain">Spain</option>
//                             <option value="France">France</option>
//                             <option value="Germany">Germany</option>
//                         </select>
//                     </label>
//                 </p>
//                 <div className="display">
//                 Conform your INFO:
//                 <p>Name:{this.state.name} </p>
//                 <p>Country:{this.state.country}</p>
//                 </div>
//             </div>
//         </div>
//     }
// }


reactDOM.render(ele, document.querySelector('#form1'))