import React, {Component} from 'react'

class Title extends Component{

    render () {
        const {props} = this
        return <div className="imgList">
            <div style={{background: props.color}}></div>
            <div className="title">{props.title}</div>
        </div>
    }
}

export default Title