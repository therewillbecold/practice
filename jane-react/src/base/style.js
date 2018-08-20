import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
const obj = {
    color: 'red'
}

const ele = <div>
    <div style={obj}>哈哈哈哈</div>
    <p>我是小P</p>
</div>


ReactDOM.render(ele, document.getElementById('style'))