import React, {Component} from 'react'

class Icons extends Component{

    render () {
        const {props} = this
        return <div className="icons">
            <span className="text">{props.text}</span>
        </div>
    }
}

export default Icons