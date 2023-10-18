/* eslint-disable no-magic-numbers */
'use client';

import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
  HomeOutlined,
  UserOutlined,
  FileOutlined,
  WalletOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const menuItems = [
    {
      key: 'dashboard',
      label: (
        <div>
          <HomeOutlined />
          <span>Dashboard</span>
        </div>
      )
    },
    {
      key: 'manage-users',
      label: (
        <div>
          <UserOutlined />
          <span>Manage Users</span>
        </div>
      )
    },
    {
      key: 'content-management',
      label: (
        <div>
          <FileOutlined />
          <span>Content Management</span>
        </div>
      )
    },
    {
      key: 'payment',
      label: (
        <div>
          <WalletOutlined />
          <span>Payment</span>
        </div>
      )
    }
  ];

  const pathname = usePathname();
  const router = useRouter();

  const [selectedKey, setSelectedKey] = useState(() => {
    const item = menuItems.find((item) => pathname.endsWith(item.key));
    return item?.key || 'dashboard';
  });

  const handleMenuItemClick = ({ key }: { key: string }): void => {
    setSelectedKey(key);
    router.push(key, { scroll: false });
  };

  return (
    <Layout className='layout'>
      <Header className='flex items-center bg-white'>
        <Image
          src='/netflop.png'
          alt='Netflop Logo'
          width={100}
          height={24}
          priority
        />
        <Menu
          className='min-w-[calc(100vw-200px)]'
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['dashboard']}
          selectedKeys={[selectedKey]}
          onClick={handleMenuItemClick}
          items={menuItems}
        />
      </Header>

      <Content className='px-[50px]'>
        <div
          className='site-layout-content my-2 rounded'
          style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>

      <Footer className='text-center'>NETFLOP ©2023 Created by ahihi</Footer>
    </Layout>
  );
};
export default AdminLayout;
