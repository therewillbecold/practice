import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

// 通过定时器来生成一个可以跳动的时间
// function renderTime () {
//     const ele = <div style={{margin: '100px 50px'}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</div>
//     ReactDOM.render(ele, document.getElementById('time'))
// }

// setInterval(() => renderTime(), 1000)

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            local: '中国',
            currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.hah = 33
        this.updateClock()
    }

    updateClock () {
        const that = this
        setInterval(() => {
            that.setState( {
                currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
            })
            that.setState( {
                num: ''
            })
        }, 1000)
    }

    render () {
        return <div className="time">
            <p>地区: {this.state.local}</p>
            <p>时间: { this.state.currentTime}</p>
        </div>
    }
}

const clocks = <div>
    <Clock></Clock>
    <Clock></Clock>
    <Clock></Clock> 
</div>

ReactDOM.render(clocks, document.getElementById('time'))

