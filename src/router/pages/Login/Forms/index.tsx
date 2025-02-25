import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Step1GetID from './Steps/Step1GetID';
import Step2GetPW from './Steps/Step2GetPW';
import Title from '../components/Title';

type LoginFormDataKey = 'phoneNum' | 'password';
export type LoginFormDataType = Record<LoginFormDataKey, string>;

const defaultValues: LoginFormDataType = {
  phoneNum: '',
  password: '',
};

const Forms = () => {
  const methods = useForm<LoginFormDataType>({ defaultValues });

  return (
    <FormsStyled>
      <Title />
      <FormProvider {...methods}>
        <From>
          <Step1GetID />
          <Step2GetPW />
        </From>
      </FormProvider>
    </FormsStyled>
  );
};

const FormsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  
  padding: 100px 40px 20vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10vh;
`;

export default Forms;
