import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Title from './title'
import './index.scss'
import Icons from './icons'
import ImgList from './img-list'

const VideoIntro = (

    <div className="video-intro">
        <div style={{height: "40px"}}>
            <Title text="原创" style={{float: "left", width: "50px"}}></Title>
            <Icons text="演技"></Icons>
            <Icons text="张瞄啪电影"></Icons>
            <Icons text="爱情36计"></Icons>
        </div>
        <div style={{height: "180px"}}>
            <ImgList color="red" title="不止电影小组
16位中外动作巨星燃向混剪，用力量向对手证明"></ImgList>
            <ImgList color="darkgreen" title="正在追
香蜜沉沉烬如霜"></ImgList>
            <ImgList color="darkgreen" title="诺兰打敦刻尔克"></ImgList>
            <ImgList color="darkgreen" title="鲁豫有约
霍建华·我的人生无"></ImgList>
        </div>

    </div>
)


ReactDOM.render(VideoIntro, document.getElementById('qVideo'))