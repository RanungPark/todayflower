import { REG_PHONE } from '@constants/reg';
import { LoginFormDataType } from '@router/pages/login/Forms';
import { InputType } from 'src/@types/inputField';

export const passwordInputData: InputType<LoginFormDataType> = {
  id: 'password',
  placeholder: '비밀번호를 입력해주세요',
  type: 'password',
  testId: 'passwordInput',
  option: {
    required: '비밀번호를 입력해주세요',
  },
};

export const phoneNumInputData: InputType<LoginFormDataType> = {
  id: 'phoneNum',
  placeholder: '+82 XXX XXX XXX',
  testId: 'phoneInput',
  option: {
    required: 'ID를 입력해주세요',
    pattern: {
      value: REG_PHONE,
      message: `'-' 없이 전화번호를 입력해주세요.`,
    },
  },
};
