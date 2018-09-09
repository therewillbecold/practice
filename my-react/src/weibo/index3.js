import React from 'react';
import Axios from 'axios';

class List extends React.Component {
    state = {
        listData: []
    }

    componentWillMount() {
        this.fetchData();
    }

    componentDidMount() {
        this.bindEvent();
    }

    bindEvent = () => {
        document.addEventListener('scroll', event => {
            if(this.distanceToBottom() < 500){
                this.fetchData()
            }
        })
    }

distanceToBottom =()=>{
    return parseInt(getComputedStyle(document.documentElement).height) - window.screen.availHeight
    - document.documentElement.scrollTop
}

lock = false;
    fetchData = () => {
        var that = this;
        if(that.lock) return 
        that.lock = true
        Axios.get('/mock/weibo.json', {
            params: {
                pageNo: 1
            }
        })
            .then(res => {
                that.lock = false;
                if (res && res.status === 200 && res.data && res.data.ok === 1) {
                    console.log(res);
                    that.setState({
                        listData: that.state.listData.concat(res.data.data.cards)
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderList = () => {
        return <ul className="weibo">
            {
                this.state.listData.map(item => {
                    return <li key={item.itemid}>
                        <div className="header">
                            <div className="profilepic">
                                <img src={item.mblog.user.profile_image_url} alt="头像" />
                            </div>
                            <div className="username">
                                {item.mblog.user.screen_name}
                            </div>
                            <div className="posttime">
                                {item.mblog.created_at}
                            </div>
                        </div>
                        <div className="post">
                            <div className="text">
                                {item.mblog.text}
                            </div>
                            <div className="pic"></div>
                        </div>
                        <div className="footer">
                            <div className="reposts">
                                {item.mblog.reposts_count}
                            </div>
                            <div className="comments">
                                {item.mblog.comments_count}
                            </div>
                            <div className="likes">
                                {item.mblog.attitudes_count}
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    }

    render() {
        return <div>
            {this.renderList()}
        </div>
    }
}

export default List