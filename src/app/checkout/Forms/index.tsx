import {FormProvider, useForm} from 'react-hook-form';
import styled from 'styled-components';

import {mixins} from '@styles/Mixin';
import {MAX_MOBILE_WIDTH} from '@constants/breakpoint';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

type CheckoutFormDataKey =
  | 'name'
  | 'email'
  | 'phone'
  | 'recipientName'
  | 'recipientPhone'
  | 'deliveryDate'
  | 'deliveryTime'
  | 'street'
  | 'postalCode'
  | 'cardNumber'
  | 'cardValidateDate'
  | 'cardValidateCVV';

export type CheckoutFormDataType = Record<CheckoutFormDataKey, string>;

const defaultValues: CheckoutFormDataType = {
  name: '',
  email: '',
  phone: '',
  recipientName: '',
  recipientPhone: '',
  deliveryDate: '',
  deliveryTime: '',
  street: '',
  postalCode: '',
  cardNumber: '',
  cardValidateDate: '',
  cardValidateCVV: '',
};

const Form = styled.form`
  ${mixins.flexBox({direction: 'column'})}
  ${({theme}) => theme.typography.Subtitle}
  gap: 10vh;

  padding: 0 80px;

  @media (max-width: ${MAX_MOBILE_WIDTH}px) {
    padding: 0 16px;
  }
`;

const Forms = () => {
  const methods = useForm<CheckoutFormDataType>({defaultValues});

  return (
    <>
      <FormProvider {...methods}>
        <Form className="typography-subtitle">
          <Step1 />
          <Step2 />
          <Step3 />
        </Form>
      </FormProvider>
    </>
  );
};

export default Forms;
