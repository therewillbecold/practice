import React from 'react';
import ReactDOM from 'react-dom';

const age = 18

const fruits = [{
    name: '苹果',
    taste: '甜',
    type: '红富士'
}, {
    name: '梨',
    taste: '甜',
    type: '邙山梨'
}, {
    name: '葡萄',
    taste: '酸',
    type: '巨峰'
}]

function flower(obj) {

    return <div>
        <p>
            {obj.kind}
        </p>
        <p>{obj.price}</p>
        <p>{obj.meaning}</p>
    </div>
}

const ele = (
    <div>
        <div>我是刘小牛</div>
        <div>我是小徐童鞋</div>
        <div>我今年{age}岁了</div>
        {/* jsx 里通过大括号可以插入 js 表达式 */}
        <div>今年家里{Math.random() > 0.5 ? '小麦' : '玉米'}丰收了</div>
        <div className="fruits">
            <ul>
                {
                    // 通过map生成一个列表
                    fruits.map((item, index) => (
                        <li item-id={index} key={index}>
                            <p>{item.name}</p>
                            <p>{item.taste}</p>
                            <p>{item.type}</p>
                        </li>
                    ))
                }
            </ul>

        </div>
        <div>
            {
                // 函数return一个html结构
                flower({
                    kind: '蝴蝶兰',
                    price: 180,
                    meaning: '飞翔'
                })
            }
        </div>
        {/* 设置属性, 类, 样式, 自定义属性 */}
        <div>
            <div className="circle"></div>
            <div className="rect" style={{ width: '200px', border: '5px solid #f90' }}></div>
            <div liu={'美少女'} className="rect">自定义属性</div>
        </div>
   
    </div>
)


// 渲染元素到页面上
// ReactDOM.render(ele, document.querySelector('#liu'))