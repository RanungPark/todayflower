import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

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

const Forms = () => {
  const methods = useForm<CheckoutFormDataType>({ defaultValues });

  return (
    <>
      <FormProvider {...methods}>
        <Form>
          <Step1 />
          <Step2 />
          <Step3 />
        </Form>
      </FormProvider>
    </>
  );
};

const Form = styled.form`
  ${mixins.flexBox({ direction: 'column' })}
  ${({ theme }) => theme.typography.Subtitle}
  gap: 10vh;

  padding: 80px;
`;

export default Forms;
