'use client';
import React from 'react';
import {Input} from "antd";
import {Space, Table, Tag} from 'antd';
import type {TableProps} from 'antd';

const {Search} = Input;

interface DataType {
    key: number;
    name: string;
    phone: number;
    address: string;
}



const columns: TableProps<DataType>['columns'] = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',

        render: (text) => <a>{text}</a>,
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',

    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                {/*<a>Invite {record.name}</a>*/}
                <a>删除</a>
            </Space>
        ),
    },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        phone: 110,
        address: 'New York No. 1 Lake Park',
    })
}


const App: React.FC = () => {

    return (
        // <div className="flex flex-col w-full h-full">
        //     <div className="flex items-center bg-white-100 h-20">
        //         <Search placeholder="请输入" enterButton="搜索" size="large" loading={false}/>
        //     </div>
        //     <div className="bg-white-200 flex-1  border-white-300">
        //         <Table
        //             className='h-full'
        //             columns={columns}
        //             pagination={{position:['none','bottomRight']}}
        //             // pagination={{pageSize: 50}}
        //             dataSource={data}
        //             // bordered
        //             // scroll={{y: 'max-content'}}
        //         />
        //     </div>
        // </div>
        <h1>主页</h1>
    );
};

export default App;

// const topOptions = [
//     { label: 'topLeft', value: 'topLeft' },
//     { label: 'topCenter', value: 'topCenter' },
//     { label: 'topRight', value: 'topRight' },
//     { label: 'none', value: 'none' },
// ];
//
// const bottomOptions = [
//     { label: 'bottomLeft', value: 'bottomLeft' },
//     { label: 'bottomCenter', value: 'bottomCenter' },
//     { label: 'bottomRight', value: 'bottomRight' },
//     { label: 'none', value: 'none' },
// ];