import React from 'react';
import ReactDOM from 'react-dom';

class Events extends React.Component {

    clickBtn = (...args) => {
        console.log('click:', args);
    }
    clickLink = (event) => {
        // 阻止默认事件
        event.preventDefault()
        console.log('点击链接:');
    }
    // 传参数
    useArgs = (...args) => {
        console.log('useArgs:', args);
        return (event) => {
            console.log('useArgsEventHandler:', args, event);
        }
    }
    render () {

        return <div>  
            <div><a  onClick={this.clickLink} href="http://baidu.com">百度下</a></div>
            <div><button onClick={this.clickBtn}>按钮</button></div>
            <div><button onClick={this.useArgs(1, 2, 3)}>传参数</button></div>
        </div>
      
    }
}

ReactDOM.render(<Events></Events>, document.getElementById('events'))