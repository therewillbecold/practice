import React from 'react';
import ReactDOM from 'react-dom';

/**
 * # 生命周期
 * ## mount 过程
 * 1. componentWillMount
 * 2. render
 * 3. componentDidMountf
 * 
 * ## unmount 过程 
 * 1. componentWillUnmount
 * 
 * ## state update 过程
 * 1. shouldComponentUpdate
 * 2. componentWillUpdate()
 * 3. render
 * 4. componentDidUpdate
 * 
 * ## props change
 * 1. componentWillReceiveProps
 * 2. shouldComponentUpdate
 * 3. componentWillUpdate()
 * 4. render
 * 5. componentDidUpdate
 */


// class Like extends React.component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             no: props.innt
//         }
//         this.like = this.like.bind(this)
//     }
//     like() {
//         this.setState({
//             no: this.state.no + 1
//         })
//     }
//     componentWillReceiveProps(nextProps, nextState) {
//         console.log('componentWillReceiveProps');
//     }
//     componentWillMount() {
//         console.log('componentWillMount');
//     }
//     componentDidMount() {
//         console.log('componentDidMount');
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('shouldComponentUpdate:', nextProps, nextState);
//         // num为单数更新, 双数不更新
//         if (nextState.no % 2 == 0) {
//             return false
//         }
//         return true
//     }
//     componentWillUpdate() {
//         console.log('componentWillUpdate');
//     }
//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
 
//     render() {
//         console.log('render');
//         return <div style={{ padding: '30px', fontSize: this.props.fontSize + 'px', border: '5px solid red' }}>
//             <span style={{ marginRight: '10px' }}>{this.state.no}</span>
//             <button onClick={this.like}>赞</button>
//         </div>
//     }
// }



class Like extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.init
        }
        this.like = this.like.bind(this)
    }
    like() {
        this.setState({
            num: this.state.num + 1
        })
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate:', prevProps, prevState);
    // }
    // 相当于原来的componentWillReceiveProps
    // 在willMount 和 willUpdate时会被调用. 需要return一个对象, 该对象会被merge到新的state上
    // 在getDerivedStateFromProps里面可以从props中取值来设置 initState
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('getDerivedStateFromProps:', nextProps, prevState);
    //     prevState = prevState || {
    //         haha: '哈哈',
    //         num: nextProps.init
    //     }
    //     return prevState
    // }


    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate:', nextProps, nextState);
        // num为单数更新, 双数不更新
        if (nextState.num % 2 == 0) {
            return false
        }
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return <div style={{ padding: '20px', fontSize: this.props.fontSize + 'px', border: '3px solid red' }}>
            <span style={{ marginRight: '10px' }}>{this.state.num}</span>
            <button onClick={this.like}>赞</button>
        </div>
    }
}


class Show extends React.Component {
    state = {
        show: true,
        fontSize: 10
    }
    toggle() {
        this.setState({
            show: !this.state.show,

        })
    }
    zoom() {
        this.setState({
            fontSize: this.state.fontSize + 2
        })
    }
    render() {
        return <div style={{ border: '1px solid #000}', width: '260px', boxShadow: '1px 1px 1px black' }}>
            <button onClick={this.toggle.bind(this)}>切换显示隐藏</button>
            <button onClick={this.zoom.bind(this)}>增大子组件文字</button>
            {
                this.state.show && <Like init={23} fontSize={this.state.fontSize} />
            }
        </div>
    }
}

ReactDOM.render(<Show></Show>, document.getElementById('lifeCycle'))