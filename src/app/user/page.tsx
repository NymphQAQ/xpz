'use client'
import React, {useEffect} from "react";
import {Button, Card, Form, Input, Modal, Popconfirm, Space, Table} from 'antd';
import {DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined} from "@ant-design/icons";
import {id} from "postcss-selector-parser";

interface DataType {
  key: string;
  name: string;
  phone: string;
  address: string;
}

const UserPage = () => {
  const [open, setOpen] = React.useState(false)
  const [list, setList] = React.useState<DataType[]>([])
  const [myForm] = Form.useForm()
  const [query, setQuery] = React.useState({})
  const [currentId, setCurrentId] = React.useState('')

  //监听查询数据的改变
  useEffect(() => {
    fetch('/api/getUserList')
      .then(data => {
        data.json().then(data => {
          setList(data.data)
        })
      })
  }, [query])

  useEffect(() => {
    if (!open) {
      setCurrentId('')
    }
  }, [open]);


  return (
    <Card title='用户列表' extra={
      <Button icon={<PlusOutlined/>} type='primary' onClick={() => {
        setOpen(true)
      }}></Button>
    }>
      <Form layout='inline'>
        <Form.Item label='手机号'>
          <Input placeholder='请输入手机号'/>
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined/>} type='primary'/>
        </Form.Item>
      </Form>
      <Table style={{marginTop: '8px'}}
             columns={[
               {title: '姓名', dataIndex: 'name'},
               {title: '手机号', dataIndex: 'phone'},
               {title: '地址', dataIndex: 'address'},
               {
                 title: '操作', render(v, r) {
                   return <Space>
                     <Button icon={<EditOutlined/>}
                             type={"primary"}
                             onClick={() => {
                               setOpen(true)
                               setCurrentId(r.key)
                               myForm.setFieldsValue(r)
                             }}
                     >
                     </Button>
                     <Popconfirm title={'确认删除吗?'} onConfirm={async () => {
                       console.log(JSON.stringify(r))
                       await fetch('http://localhost:8080/article/delete', {
                         method: 'POST',
                         body: JSON.stringify(r),
                         headers: {
                           'Content-Type': 'application/json'
                         }
                       })
                       setQuery({})
                     }}>
                       <Button icon={<DeleteOutlined/>}
                               type={"primary"}
                               danger
                       >
                       </Button>
                     </Popconfirm>

                   </Space>
                 }
               },
             ]}
             dataSource={list} rowKey={'key'}/>
      <Modal
        title='编辑'
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
        onOk={() => {
          myForm.submit()
        }}
        destroyOnClose={true}//关闭时销毁
        maskClosable={false}//点击空白不关闭
      >
        <Form
          preserve={false}//不加的话,模态框的数据不会销毁
          layout={'vertical'}
          form={myForm}
          onFinish={async (v) => {
            console.log(v)
            if (currentId) {
              await fetch('http://localhost:8080/article/update', {
                method: 'POST',
                body: JSON.stringify({id: currentId, ...v}),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(value => {
                console.log(value)
              })
              console.log('这是修改操作')
            } else {
              await fetch('http://localhost:8080/article/add', {
                method: 'POST',
                body: JSON.stringify(v),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(value => {
                console.log(value)
              })
            }

            setQuery({})
            setOpen(false)
          }}>
          <Form.Item label='名字' name={'title'} rules={[
            {required: true, message: '请输入名字'}
          ]}>
            <Input placeholder={'请输入名字'}/>
          </Form.Item>
          <Form.Item label={'简介'} name={'details'}>
            <Input.TextArea placeholder={'请输入简介'}/>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default UserPage;