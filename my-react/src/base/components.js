import React from 'react';
import ReactDOM from 'react-dom';

// 用函数定义一个组件

function Welcome(props) {
    return <h1>Hello, {props.name}, I come from {props.from}</h1>;
}


// 用class定义组件

class WelcomeChinese extends React.Component {
    constructor(props) {
        // props 是元素标签上传入的属性
        super(props)
    }
    render() {
        // 在组件的方法里可以通过this.props获取到 props
        console.log('render:', this.props);
        return (
            <dir>
                <h1>幸会!! 在下{this.props.name}, 来自{this.props.from}</h1>;
            </dir>
        )
    }
}

// 定义的元素最外层必须有一个元素包裹其子元素
const childEle = (
    <div>
        <div>111</div>
        <div>222</div>
    </div>
)


const ele = (<div>
    {Welcome({ name: '刘小小' })}
    {/* 如果一个组件没有子元素, 可以写成自封闭标签 */}
    <Welcome name="Beauty 刘" from="zhumadian" />
    <WelcomeChinese name="孔子" from="山东" style={{ color: 'red' }} />
    <WelcomeChinese name="岳飞" from="河南" />
    <WelcomeChinese name="曹操" from="河南" />
    {childEle}
</div>)



ReactDOM.render(ele, document.querySelector('#components'))