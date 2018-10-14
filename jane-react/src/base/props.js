import React from 'react'
import reactDOM from 'react-dom'

class Props extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return <div>
            <h3>Porps 练习</h3>
        </div>
    }
}

class Comp1 extends React.Component {
    state = {
        msg: ''
    }
    render() {
        return <div>
            <h3>comp1</h3>
            <input type="text" value={this.state.msg} onChange={e => this.setState({ msg: e.target.value })} />
            <Comp2 msg={this.state.msg}></Comp2>
        </div>
    }
}

class Comp2 extends React.Component {
    
    render() {
        console.log('this');
        return <div>
            <h3>comp2</h3>
            <p>{this.props.msg}</p>
            <Comp3 msg={67890}></Comp3>
        </div>
    }
}

class Comp3 extends React.Component {

    render() {
        console.log();
        return <div>
            <h3>comp3</h3>
            <p>
                {this.props.msg}
            </p>
            {/* <input type="text" value={this.state.msg} onChange={e => this.setState({ msg: e.target.value })} /> */}
        </div>
    }
}


const ele = <div>
    <Props a="1" b="2" bool={true} num={444} fn={() => { }}></Props>
    <Comp1></Comp1>
</div>


reactDOM.render(ele, document.querySelector('#props'))