'use client';
import { getElementFromArrayByElementKey } from '@/common/helpers';
import PrimaryTable from '@/components/admin/common/PrimaryTable';
import SearchFiltersToolBar, {
  SearchFilters
} from '@/components/admin/common/SearchFiltersToolBar';
import { dataSource, type DataType } from '@/libs/Antd/mock/userData';
import theme from '@/libs/Antd/themeConfig';
import { ConfigProvider, Card, Empty, Space, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const filters = {
  Test1: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Test2: ['true', 'false'],
  Test3: ['ahihi', 'ahaha', 'ahuhu']
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
      </Space>
    )
  }
];

function ManageUsersPage() {
  const [usersSelected, setUsersSelected] = useState<React.Key[]>([]);
  const [lastValue, setLastValue] = useState<DataType>({});

  const handelOnChangeFilters = (value: SearchFilters) => {
    // eslint-disable-next-line no-console
    console.log('handelOnChangeFilters', value);
  };

  useEffect(() => {
    const lastValue = getElementFromArrayByElementKey(
      dataSource,
      'key',
      usersSelected[usersSelected.length - 1]
    );
    if (lastValue) {
      setLastValue(lastValue);
    }
  }, [usersSelected]);

  return (
    <ConfigProvider theme={theme}>
      <div className='flex h-full'>
        <div className='left-panel w-3/4 h-full overflow-auto'>
          <SearchFiltersToolBar
            placeholderSearch='Search user'
            handelOnChange={handelOnChangeFilters}
            filters={filters}
          />
          <PrimaryTable
            columns={columns}
            dataSource={dataSource}
            handleSelectRecords={setUsersSelected}
          />
        </div>
        <div className='right-panel w-1/4 h-full pl-5'>
          {usersSelected.length === 0 ? (
            <div className='rounded-xl border-2 border-dashed w-full h-full'>
              <div className='flex justify-center items-center h-full'>
                <Empty />
              </div>
            </div>
          ) : (
            <Card
              className='w-full h-full'
              cover={
                <Image
                  alt='logo'
                  src='/dog.jpg'
                  width={400}
                  height={400}
                  priority
                />
              }>
              <Meta
                title={`${lastValue.name} - ${lastValue.address}`}
                description='The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dogs nearest living relative'
              />
            </Card>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default ManageUsersPage;
