import './index.scss'
import React from 'react'
import Axios from 'axios'
import loading from '../assets/loading.gif'

class List extends React.Component {

    state = {
        listData: [],
        showLoading: true
    }

    fetchLock = false

    componentWillMount() {
        this.fetchData()
    }
    componentDidMount() {
        this.bindEvent()
    }
    bindEvent = () => {
        document.addEventListener('scroll', event => {
            if (this.distanceToBottom() < 500 && !this.fetchLock) {
                this.fetchData()
            }
        })
    }
    fetchData = () => {
        if (this.fetchLock) return;
        this.fetchLock = true
        this.setState({
            showLoading: true
        })
        Axios.get('/mock/weibo.json', {
            params: {
                pageNo: 1
            }
        })
            .then(res => {
                this.fetchLock = false
                this.setState({
                    showLoading: false
                })
                if (res && res.status == 200 && res.data && res.data.ok == 1) {
                    this.setState({
                        listData: this.state.listData.concat(res.data.data.cards)
                    })
                }
            })
            .catch(err => {
                this.fetchLock = false
                console.log(err);
                this.setState({
                    showLoading: false
                })
            })
    }

    distanceToBottom = () => {
        return parseInt(getComputedStyle(document.documentElement).height) - window.screen.availHeight
            - document.documentElement.scrollTop

    }

    renderList = () => {

        if (this.state.listData.length == 0) {
            return <div>无数据</div>
        }

        return (
            <ul className="weibo">
                {
                    this.state.listData.map(item => {

                        return (
                            <li key={item.itemid}>
                                <div className="header">
                                    <div className="username">
                                        {item.mblog.user.screen_name}
                                    </div>
                                    <div className="pic">
                                        <img src={item.mblog.user.profile_url} alt="" />
                                    </div>
                                    <div className="publishtime">
                                        {item.mblog.created_at}
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="text" dangerouslySetInnerHTML={{ __html: item.mblog.text }} />
                                    <div className="imgs">

                                    </div>
                                </div>
                                <div className="footer">
                                    <div className="zhuanfa">
                                        {item.mblog.reposts_count}

                                    </div>
                                    <div className="comments">
                                        {item.mblog.comments_count}
                                    </div>
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
        return <div style={{ paddingBottom: '500px' }}>
            {
                this.renderList()
            }
            {this.state.showLoading && <div>
                <img src={loading} width="200px" />
            </div>}
        </div>
    }
}

export default List