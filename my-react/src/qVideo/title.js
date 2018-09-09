import React, {Component} from 'react'

class Title extends Component{

    render () {
        const {props} = this
        return <div className="title">
            <span></span>
            <span className="text">{props.text}</span>
        </div>
    }
}

export default Title