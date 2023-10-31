import { useState } from 'react';
import { useFormik } from 'formik';
import { schema } from './schema';
import tw from '@/common/utils/classUtil';
import ErrorMessage from '../ErrorMessage';
import InputWrapper from '../InputWrapper';
import Label from '../Label';
import Button from '@/components/client/Button';
import Input from '@/components/client/Input';

const Form = (props: FormProps) => {
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);

  const initialValues: FormValues = {
    email: '',
    password: ''
  };
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const data = {
        email: values.email,
        password: values.password
      };

      props.onSubmit(data);
    },
    validationSchema: schema
  });

  const onEmailFocus = () => {
    setIsEmailInputFocused(true);
  };
  const onPasswordFocus = () => {
    setIsPasswordInputFocused(true);
  };
  const onEmailBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    formik.handleBlur(event);

    if (!event.currentTarget.value) {
      setIsEmailInputFocused(false);
    }
  };
  const onPasswordBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    formik.handleBlur(event);

    if (!event.currentTarget.value) {
      setIsPasswordInputFocused(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} >
      <InputWrapper>
        <Label
          htmlFor='email'
          isFocused={isEmailInputFocused}
        >
          <span>Email</span>
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          onFocus={onEmailFocus}
          onChange={formik.handleChange}
          onBlur={onEmailBlur}
          value={formik.values.email}
          isFocusedOnMount={true}
        />
        <ErrorMessage>
          {formik.touched.email && formik.errors.email}
        </ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label
          htmlFor='password'
          isFocused={isPasswordInputFocused}
        >
          <span>Password</span>
        </Label>
        <div>
          <Input
            id='password'
            name='password'
            type='password'
            onFocus={onPasswordFocus}
            onChange={formik.handleChange}
            onBlur={onPasswordBlur}
            value={formik.values.password}
          />
        </div>
        <ErrorMessage>
          {formik.touched.password && formik.errors.password}
        </ErrorMessage>
      </InputWrapper>
      <div
        className={tw([
          'w-fit',
          'mx-auto'
        ])}
      >
        <Button
          type='submit'
          disabled={props.isLoading}
          size='base'
        >
          {props.isLoading ? <span>Loading</span> : <span>Sign in</span>}
        </Button>
      </div>
    </form>
  );
};

export default Form;

type FormValues = {
  email: string;
  password: string;
};

type FormProps = {
  isLoading: boolean;
  onSubmit: (data: onSubmitData) => void;
};

export type onSubmitData = {
  email: string;
  password: string;
};
