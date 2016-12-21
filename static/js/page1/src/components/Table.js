import React, {Component, PropTypes} from 'react';
import {Table, Icon, message, Spin} from 'antd';

const {Column, ColumnGroup} = Table;

// const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a href="#">{text}</a>,
// }, {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
// }, {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
// }, {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//         <span>
//       <a href="#">Action 一 {record.name}</a>
//       <span className="ant-divider"/>
//       <a href="#">Delete</a>
//       <span className="ant-divider"/>
//       <a href="#" className="ant-dropdown-link">
//         More actions <Icon type="down"/>
//       </a>
//     </span>
//     ),
// }];

// const data = [{
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
// }, {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
// }];

export class DataTable extends Component {
    render() {
        const {items, isFetching} = this.props.tableData;
        return (
            <Spin spinning={isFetching}>
                <Table
                    dataSource={items}
                    bordered
                >
                    <Column
                        title="Aa"
                        dataIndex="aa"
                        key="aa"
                    />
                    <Column
                        title="Bb"
                        dataIndex="bb"
                        key="bb"
                    />
                    <Column
                        title="Cc"
                        dataIndex="cc"
                        key="cc"
                    />
                    <Column
                        title="Dd"
                        dataIndex="dd"
                        key="dd"
                    />
                    <Column
                        title="Create Time"
                        dataIndex="create_time"
                        key="create_time"
                    />
                    <Column
                        title="Update Time"
                        dataIndex="update_time"
                        key="update_time"
                    />
                </Table>
            </Spin>
        )
    }
}
