import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {
    Button,
    Row,
    Col,
    Form,
    Input,
    Select,
    Table
} from 'antd';




const FormItem = Form.Item


class People extends React.Component {
    state = {
        queryParams: {
            country: '',
            gender: 'female',
            hobby: ''
        },
        tableData: [],

    }

    columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(item) {
            console.log(item);
            const enumObj = {
                female: '女',
                male: '男'
            }
            return <span>{enumObj[item]} </span>
        }
    }, {
        title: '国家',
        dataIndex: 'country',
        key: 'country',
    }, {
        title: '爱好',
        dataIndex: 'hobby',
        key: 'hobby',
    }]

    originData = [
        {
            id: '1',
            name: '小刘',
            gender: 'female',
            country: '中国',
            hobby: '羽毛球'
        },
        {
            id: '2',
            name: 'Papi',
            gender: 'female',
            country: '中国',
            hobby: '排球'
        },
        {
            id: '3',
            name: 'John',
            gender: 'male',
            country: '英国',
            hobby: '足球'
        },
        {
            id: '4',
            name: 'Eric',
            gender: 'male',
            country: '英国',
            hobby: '游泳'
        },
        {
            id: '5',
            name: 'Grace',
            gender: 'female',
            country: '德国',
            hobby: '足球'
        }
    ]
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

        }, this.originData)
        this.setState({
            tableData: res
        })
    }

    componentWillMount() {
        this.setState({
            tableData: this.originData
        })
    }

    render() {

        return <div className="students" style={{ padding: '20px' }}>
            <div className="filter">
                <Row>
                    <Col span={6}>
                        <FormItem
                            style={{ paddingRight: "10px" }}
                            label="国家"
                        >
                            <Input
                                value={this.state.queryParams.country}
                                onChange={event => {
                                    let queryParams = this.state.queryParams
                                    queryParams.country = event.target.value
                                    this.setState({
                                        queryParams: queryParams
                                    })
                                }}
                            ></Input>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            label="性别"
                            style={{ paddingRight: "10px" }}
                        >
                            <Select defaultValue="female"
                                style={{ width: '100%' }}
                                value={this.state.queryParams.gender}
                                onChange={value => {
                                    this.setState({
                                        queryParams: { ...this.state.queryParams, ...{ gender: value } }
                                    })
                                }}
                            >

                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="male">男</Select.Option>
                                <Select.Option value="female">女</Select.Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            label="爱好"
                            style={{ paddingRight: "10px" }}

                        >
                            <Input
                                value={this.state.queryParams.hobby}
                                onChange={event => {
                                    this.setState({
                                        queryParams: { ...this.state.queryParams, ...{ hobby: event.target.value } }
                                    })
                                }}>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            label=" "
                            colon={false}
                            style={{ float: "right" }}
                        >
                            <Button type="primary" onClick={this.search}>搜索</Button>
                        </FormItem>
                    </Col>
                </Row>

            </div>
            <div>
                <Table rowKey="name" columns={this.columns} dataSource={this.state.tableData} />
            </div>
        </div>
    }
}


ReactDOM.render(<People />, document.querySelector('#antd'))