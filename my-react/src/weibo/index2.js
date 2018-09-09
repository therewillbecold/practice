import './index2.scss'
import React from 'react'
import Axios from 'axios'
import loading from '../assets/loading.gif'


class List extends React.Component {

    state = {
        listData: []
    }


    componentWillMount() {
        this.fetchData()
    }

    componentDidMount() {
        this.bindEvent()
    }

    bindEvent = () => {
        document.addEventListener('scroll', event => {
            if (this.distanceToBottom() < 500) {
                this.fetchData()
            }
        })

    }

    lock = false;
    fetchData = () => {
        var that = this;
        if (that.lock) return;
        that.lock = true;
        /*promise函数*/
        Axios.get('/mock/weibo.json', {
            /*axios中传递参数需要放在params里*/
            params: {
                pageNo: 1
            }
        })
            .then(res => {
                /*then 里面返回结果 */
                /* console.log(res);*/
                that.lock = false;
                if (res && res.status === 200 && res.data && res.data.ok === 1) {
                    that.setState({
                        listData: that.state.listData.concat(res.data.data.cards)
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }


    distanceToBottom = () => {
        return parseInt(getComputedStyle(document.documentElement).height) - window.screen.availHeight
            - document.documentElement.scrollTop

    }


    renderList = () => {
        return (
            <ul className="Weibo">
                {
                    this.state.listData.map(item => {
                        return (
                            <li key={item.itemid}>
                                <div className="header">
                                    <div className="username">
                                        {item.mblog.user.screen_name}
                                    </div>
                                    <div className="profilePic">
                                        <img src={item.mblog.user.profile_image_url} alt="头像" />
                                    </div>
                                    <div className="postTime">
                                        {item.mblog.created_at}
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="text">{item.mblog.text}</div>
                                    <div className="pic">
                                        <img src="" alt="post照片" />
                                    </div>
                                </div>
                                <div className="footer">
                                    <div className="forward">{item.mblog.reposts_count}</div>
                                    <div className="comments">{item.mblog.comments_count}</div>
                                    <div className="like">{item.mblog.attitudes_count}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    render() {
        return <div>
            {
                this.renderList()
            }
            {
                [1, 2, 3].map(item => <li>{item}</li>)
            }

        </div>
    }
}

export default List
