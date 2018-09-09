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

class MyInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.init || ''
        }
    }

    changeHandler = event => {
        console.log('beforeSetState');
        const value = event.target.value
        this.setState({
            text: value
        }, () => {
            console.log('setState-callback');
            this.props.onChange(value)
        })
        console.log('afterSetState');
    }
    componentDidMount() {
        console.log('MyInput-this:', this);
        console.log('MyInput-props:', this.props);
    }
    render() {
        console.log('render');
        return <div>
            <div>
                <input value={this.state.text} onChange={this.changeHandler} type="text" placeholder="随便输入" />
            </div>
        </div>
    }
}

class Add extends React.Component {
    state = {
        num1: 0,
        num2: 0
    }
    init = {
        num1: 0,
        num2: 0,
    }
    changeHandler_num1 = (val) => {
        this.setState({
            num1: val
        })
    }
    changeHandler_num2 = (val) => {
        this.setState({
            num2: val
        })
    }
    render() {
        return <div className="add">
            <h3>加法</h3>
            <div>
                <MyInput init={this.init.num1} onChange={this.changeHandler_num1}></MyInput>
                <span>+</span>
                <MyInput init={this.init.num2} onChange={this.changeHandler_num2}></MyInput>
                <span>=</span>
                <span>{Number(this.state.num1) + Number(this.state.num2)}</span>
            </div>
        </div>
    }
}




const ele = <div>
    <Form></Form>
    <Add></Add>
</div>

ReactDOM.render(ele, document.querySelector('#form'))