import { Result } from 'antd';
import { IeOutlined } from '@ant-design/icons';
import tw from '@/common/utils/classUtil';

const SignIn = () => {
  return (
    <Result
      icon={<IeOutlined />}
      title='Sign in page is comming soon!'
      subTitle='This feature is on the flight, but never know when it will arrive'
      className={tw(['[&>.ant-result-title]:text-blue-500', '[&>.ant-result-title]:text-3xl', '[&>.ant-result-subtitle]:text-xl'])}
    />
  );
};

export default SignIn;
