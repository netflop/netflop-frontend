import theme from '@/libs/Antd/themeConfig';
import { ConfigProvider } from 'antd';
import React from 'react';

function Demo() {
  return (
    <ConfigProvider theme={theme}>
      <div>Demo dashboard</div>
    </ConfigProvider>
  );
}

export default Demo;
