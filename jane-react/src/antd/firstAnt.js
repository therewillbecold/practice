import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {
    Button,
    Icon,
    Row,
    Col,
    Menu,
    Dropdown,
    Pagination,
    Steps,
    Cascader,
    Checkbox 
} from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" >Pasta</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" >Cheese Burger</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" >Macaron</a>
        </Menu.Item>
    </Menu>
)

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

const Step = Steps.Step;

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}


const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options1 = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];



const ele = <div>
    <div className='button' style={{ margin: '20px 0 20px 0' }}>
        <Button type="primary" style={{ margin: '0 20px 0 20px' }}>Primary</Button>
        <Button style={{ marginRight: '20px' }}>Default</Button>
        <Button type="dashed" style={{ marginRight: '20px' }}>Dashed</Button>
        <Button type="danger" style={{ marginRight: '20px' }}>Danger</Button>
        <Button type="primary" shape="circle" icon="search" style={{ marginRight: '20px' }} />
        <Button type="primary" shape="circle" icon="download" size={'large'} style={{ marginRight: '20px' }} />
        <Button type="primary" icon="download" size={'large'} style={{ marginRight: '20px' }}>Download</Button>
    </div>

    <div className='icon' style={{ margin: '20px 0 20px 0' }}>
        <Icon type="step-backward" style={{ margin: '0 20px 0 20px' }} />
        <Icon type="step-forward" style={{ margin: '0 20px 0 20px' }} />
        <Icon type="forward" style={{ margin: '0 20px 0 20px' }} />
        <Icon type="backward" style={{ margin: '0 20px 0 20px' }} />
    </div>


    <div className="grid">
        <div className="gutter-example">
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <Button type="primary" style={{ margin: '0 20px 0 20px' }}>Primary</Button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Button style={{ marginRight: '20px' }}>Default</Button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Button type="dashed" style={{ marginRight: '20px' }}>Dashed</Button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Button type="danger" style={{ marginRight: '20px' }}>Danger</Button>
                </Col>
            </Row>
        </div>
    </div>

    <div className="dropdown" style={{ margin: '20px 0 20px 0' }} >
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#" style={{ color: '#000', textDecoration: 'none' }}>
                Today's Special <Icon type="down" />
            </a>
        </Dropdown>
    </div>

    <div className='menu' style={{ margin: '20px 0 20px 0' }}>
        <Sider />
    </div>

    <div className="pagination" style={{ margin: '20px 0 20px 0' }}>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={50} />
    </div>

    <div className="steps" style={{ margin: '20px 0 20px 0' }}>
        <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
    </div>

    <div className='cascader' style={{ margin: '20px 0 20px 0' }}>
        <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
    </div>

    <div>
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        <br /><br />
        <CheckboxGroup options={options1} defaultValue={['Pear']} onChange={onChange} />
        <br /><br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
    </div>

</div>


ReactDOM.render(ele, document.getElementById('firstAnt'))