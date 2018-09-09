import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {
    Input,
    Row,
    Col,
    Button,
    Table,
    Divider,
    Tag
} from 'antd'



// const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a href="javascript:;">{text}</a>,
// }, {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
// }, {
//     title: 'Location',
//     dataIndex: 'location',
//     key: 'location',
// }, {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//         <span>
//             {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
//         </span>
//     ),
// }, {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//         <span>
//             <a href="javascript:;">Invite {record.name}</a>
//             <Divider type="vertical" />
//             <a href="javascript:;">Delete</a>
//         </span>
//     ),
// }];

// const data = [{
//     key: '1',
//     name: 'John',
//     age: 28,
//     location: 'Beijing',
//     tags: ['developer'],
// }, {
//     key: '2',
//     name: 'Jim',
//     age: 26,
//     location: 'Hong Kong',
//     tags: ['physicist'],
// }, {
//     key: '3',
//     name: 'Jane',
//     age: 23,
//     location: 'Wuhan',
//     tags: ['developer'],
// }, {
//     key: '4',
//     name: 'Jenson',
//     age: 32,
//     location: 'Guangzhou',
//     tags: ['photographer'],
// }, {
//     key: '5',
//     name: 'Lily',
//     age: 22,
//     location: 'Shenzhen',
//     tags: ['artist'],
// }, {
//     key: '6',
//     name: 'Alice',
//     age: 25,
//     location: 'Beijing',
//     tags: ['model'],
// }, {
//     key: '7',
//     name: 'Holly',
//     age: 27,
//     location: 'Dalian',
//     tags: ['HR'],
// }, {
//     key: '8',
//     name: 'Harper',
//     age: 28,
//     location: 'Xiamen',
//     tags: ['chef'],
// }, {
//     key: '9',
//     name: 'Kate',
//     age: 20,
//     location: 'Beijing',
//     tags: ['model'],
// }, {
//     key: '10',
//     name: 'Harry',
//     age: 27,
//     location: 'Shanghai',
//     tags: ['photographer'],
// }, {
//     key: '11',
//     name: 'Oliver',
//     age: 24,
//     location: 'Chengdu',
//     tags: ['HR'],
// }, {
//     key: '12',
//     name: 'Mark',
//     age: 24,
//     location: 'Tianjin',
//     tags: ['physicist'],
// }
// ];

class Instagram extends React.Component {
    state = {
        queryParams: {
            name: '',
            age: '',
            location: ''
        }, data: [{
            key: '1',
            name: 'John',
            age: 28,
            location: 'Beijing',
            tags: ['developer'],
        }, {
            key: '2',
            name: 'Jim',
            age: 26,
            location: 'Hong Kong',
            tags: ['physicist'],
        }, {
            key: '3',
            name: 'Jane',
            age: 23,
            location: 'Wuhan',
            tags: ['developer'],
        }, {
            key: '4',
            name: 'Jenson',
            age: 32,
            location: 'Guangzhou',
            tags: ['photographer'],
        }, {
            key: '5',
            name: 'Lily',
            age: 22,
            location: 'Shenzhen',
            tags: ['artist'],
        }, {
            key: '6',
            name: 'Alice',
            age: 25,
            location: 'Beijing',
            tags: ['model'],
        }, {
            key: '7',
            name: 'Holly',
            age: 27,
            location: 'Dalian',
            tags: ['HR'],
        }, {
            key: '8',
            name: 'Harper',
            age: 28,
            location: 'Xiamen',
            tags: ['chef'],
        }, {
            key: '9',
            name: 'Kate',
            age: 20,
            location: 'Beijing',
            tags: ['model'],
        }, {
            key: '10',
            name: 'Harry',
            age: 27,
            location: 'Shanghai',
            tags: ['photographer'],
        }, {
            key: '11',
            name: 'Oliver',
            age: 24,
            location: 'Chengdu',
            tags: ['HR'],
        }, {
            key: '12',
            name: 'Mark',
            age: 24,
            location: 'Tianjin',
            tags: ['physicist']
        }
        ]
    }

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            </span>
        ),
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
            </span>
        ),
    }];

    // data = [{
    //     key: '1',
    //     name: 'John',
    //     age: 28,
    //     location: 'Beijing',
    //     tags: ['developer'],
    // }, {
    //     key: '2',
    //     name: 'Jim',
    //     age: 26,
    //     location: 'Hong Kong',
    //     tags: ['physicist'],
    // }, {
    //     key: '3',
    //     name: 'Jane',
    //     age: 23,
    //     location: 'Wuhan',
    //     tags: ['developer'],
    // }, {
    //     key: '4',
    //     name: 'Jenson',
    //     age: 32,
    //     location: 'Guangzhou',
    //     tags: ['photographer'],
    // }, {
    //     key: '5',
    //     name: 'Lily',
    //     age: 22,
    //     location: 'Shenzhen',
    //     tags: ['artist'],
    // }, {
    //     key: '6',
    //     name: 'Alice',
    //     age: 25,
    //     location: 'Beijing',
    //     tags: ['model'],
    // }, {
    //     key: '7',
    //     name: 'Holly',
    //     age: 27,
    //     location: 'Dalian',
    //     tags: ['HR'],
    // }, {
    //     key: '8',
    //     name: 'Harper',
    //     age: 28,
    //     location: 'Xiamen',
    //     tags: ['chef'],
    // }, {
    //     key: '9',
    //     name: 'Kate',
    //     age: 20,
    //     location: 'Beijing',
    //     tags: ['model'],
    // }, {
    //     key: '10',
    //     name: 'Harry',
    //     age: 27,
    //     location: 'Shanghai',
    //     tags: ['photographer'],
    // }, {
    //     key: '11',
    //     name: 'Oliver',
    //     age: 24,
    //     location: 'Chengdu',
    //     tags: ['HR'],
    // }, {
    //     key: '12',
    //     name: 'Mark',
    //     age: 24,
    //     location: 'Tianjin',
    //     tags: ['physicist'],
    // }
    // ];


    search = () => {
        const filters = { ...this.state.queryParams }
        const keys = Object.keys(filters);
        // 筛选出符合条件(筛选条件)的项
        // keys = [ 'country', 'gender', 'hobby']
        const res = keys.reduce((accumulator, currentValue) => {
            if (filters[currentValue]) {
                return accumulator.filter((item) => {
                    return item[currentValue] == filters[currentValue]
                })
            } else {
                return accumulator
            }

        }, this.state.data)
        this.setState({
            data: res
        })
    }

    componentWillMount() {
        this.setState({
            tableData: this.data
        })
    }


    render() {
        return <div>
            <div>
                <h1>People you may like ... </h1>
            </div>
            <div className="gutter-example" style={{ margin: '50px 0 50px 0' }}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Name</p>
                        </div>
                        <Input size="large" placeholder="Name" value={this.state.queryParams.name} onChange={event => this.setState({
                            queryParams: Object.assign(this.state.queryParams, {
                                name: event.target.value
                            })
                        })} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Age</p>
                        </div>
                        <Input size="large" placeholder="Age" value={this.state.queryParams.age} onChange={event => this.setState({
                            queryParams: Object.assign(this.state.queryParams, {
                                age: event.target.value
                            })
                        })} onKeyDown={event => {
                            if (event.keyCode == 13) {
                                this.search()
                            }
                        }} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>Location</p>
                        </div>
                        <Input size="large" placeholder="Location" value={this.state.queryParams.location} onChange={event => this.setState({
                            queryParams: Object.assign(this.state.queryParams, {
                                location: event.target.value
                            })
                        })} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ paddingTop: '49px' }}>
                        </div>
                        <Button type="primary" size={'large'} style={{ float: 'left' }} onClick={this.search}>Search</Button>
                    </Col>
                </Row>

                <div style={{ marginTop: '30px' }}>
                    <Table columns={this.columns} dataSource={this.state.data} />
                </div>
            </div>

        </div>
    }
}




const ele = <div>
    <Instagram />
</div>

ReactDOM.render(ele, document.getElementById('secAnt'))