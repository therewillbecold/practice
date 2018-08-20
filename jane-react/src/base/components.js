import React from 'react';
import ReactDOM from 'react-dom';

// 用函数定义一个组件

var formatName = (user) => {
    return user.firstName + user.lastName;
}

const user = {
    firstName: '简',
    lastName: '刘'
}


var Greeting = (user) => {
    if (user) {
        return <p>Hi is {formatName(user)} you fullname ?</p>
    } else {
        return <p>uhhh...  have we met before? </p>
    }
}


// 用函数定义组件
function WelcomeInChinese(props) {
    return <h3>你好,我叫{props.name},我来自{props.hometown} .</h3>
}


// 用class定义组件
class WelcomeInEnglish extends React.Component {
    render() {
        return (
            <div>
                <h3>Hi I'm {this.props.name}, {this.props.hometown} is my hometown .</h3>
            </div>
        )
    }
}





const ele = (
    <div>
        {/* {WelcomeInChinese({ name: '简', hometown: '江南' })} */}
        <WelcomeInChinese name='简' hometown='江南'></WelcomeInChinese>

        <WelcomeInEnglish name='Jack' hometown='LA' />
        <WelcomeInEnglish name='lily' hometown='NY' />

        <p>My Name is {formatName(user)}</p>
        <p>{Greeting(user)}</p>
        
    </div>
)






ReactDOM.render(ele, document.querySelector('#components'))