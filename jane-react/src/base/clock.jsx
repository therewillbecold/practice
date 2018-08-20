import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


// 通过定时器来生成一个可以跳动的时间
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello world!</h1>
//             <h2 style={{ margin: '400px 400px;' }}>China: {moment().format('YYYY-MM-DD HH:mm:ss')}</h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('time'))
// }
// setInterval(tick, 1000);


// function tick() {
//     const element = (
//         <div>
//             <h1>Hello,world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('time'));
// }
// setInterval(tick, 1000);


// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { date: new Date() }
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//           date: new Date()
//         });
//       }
//     render() {
//         return (
//             <div>
//                 <h1>Hello world!</h1>
//                 <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
//             </div>
//         )
//     }
// }
// const clocks = <div>
//     <Clock></Clock>
//     <Clock></Clock>
//     <Clock></Clock>
//     <Clock></Clock>
// </div>

// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
//         }
//         // this.updateClock()
//     }
//     updateClock() {
//         const that = this
//         setInterval(() => {
//             that.setState({
//                 currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
//             })
//         }, 1000)
//     }

//     render() {
//         return <div className='time'>
//             {
//                 this.state.currentTime
//             }
//         </div>
//     }

// }


// const clocks = <div>
//     <Clock></Clock>
//     <Clock></Clock>
// </div>

// ReactDOM.render(clocks, document.getElementById('time'));

