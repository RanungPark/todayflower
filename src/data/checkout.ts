import {
  REG_DATE,
  REG_EMAIL,
  REG_NAME,
  REG_NUMBER,
  REG_PHONE,
  REG_STRING_NUMBER,
} from '@constants/reg';
import { CheckoutFormDataType } from '@router/pages/checkout/forms';
import { CustomInputDatasType, InputType } from 'src/@types/inputField';

export const Step1InputDatas: InputType<CheckoutFormDataType>[] = [
  {
    id: 'name',
    placeholder: 'Your Name *',
    option: {
      required: '이름을 입력해주세요.',
      pattern: {
        value: REG_NAME,
        message: '이름을 입력해주세요 한글은 뛰어쓰기 없이 입력해 주세요',
      },
    },
  },
  {
    id: 'email',
    placeholder: 'Your Email *',
    option: {
      required: '이메일을 입력해주세요.',
      pattern: {
        value: REG_EMAIL,
        message: '이메일 형식으로 입력해주세요',
      },
    },
  },
  {
    id: 'phone',
    placeholder: 'Your Phone number *',
    option: {
      required: '전화번호를 입력해주세요',
      pattern: {
        value: REG_PHONE,
        message: '- 없이 전화번호를 입력해주세요.',
      },
    },
  },
];

export const Step2InputDatas: CustomInputDatasType<CheckoutFormDataType>[] = [
  {
    inputType: 'normal',
    input: {
      id: 'recipientName',
      placeholder: 'Recipients Name *',
      option: {
        required: '수신자의 이름을 입력해주세요',
        pattern: {
          value: REG_NAME,
          message: '이름을 입력해주세요 한글은 뛰어쓰기 없이 입력해 주세요',
        },
      },
    },
  },
  {
    inputType: 'normal',
    input: {
      id: 'recipientPhone',
      placeholder: 'Recipients Phone number *',
      option: {
        required: '수신자의 전화번호를 입력해주세요',
        pattern: {
          value: REG_PHONE,
          message: '- 없이 전화번호를 입력해주세요.',
        },
      },
    },
  },
  {
    inputType: 'datePicker',
    input: {
      id: 'deliveryDate',
      placeholder: 'Data of Delivery',
    },
  },
  {
    inputType: 'selectBox',
    input: {
      id: 'deliveryTime',
      placeholder: 'Delivery Time',
    },
    options: [
      '8AM',
      '9AM',
      '10AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
    ],
  },
  {
    inputType: 'group',
    inputs: [
      {
        id: 'street',
        placeholder: 'Street *',
        option: {
          required: '주소지를 입력해주세요',
          pattern: {
            value: REG_STRING_NUMBER,
            message: '주소지를 올바르게 입력해주세요.',
          },
        },
      },
      {
        id: 'postalCode',
        placeholder: 'Postal code *',
        option: {
          required: '우편번호를 입력해주세요',
          pattern: {
            value: REG_NUMBER,
            message: '우편번호를 올바르게 입력해주세요.',
          },
        },
      },
    ],
  },
];

export const Step3InputDatas: CustomInputDatasType<CheckoutFormDataType>[] = [
  {
    inputType: 'normal',
    input: {
      id: 'cardNumber',
      placeholder: 'Card Number *',
      option: {
        required: '카드번호를 입력해주세요.',
        pattern: {
          value: REG_NUMBER,
          message: '카드번호를 올바르게 입력해주세요.',
        },
      },
    },
  },
  {
    inputType: 'group',
    inputs: [
      {
        id: 'cardValidateDate',
        placeholder: 'MM / YY *',
        option: {
          required: '/ 을 포함하여 카드 유효기간을 입력해주세요.',
          pattern: {
            value: REG_DATE,
            message: '/ 을 포함하여 카드 유효기간을 올바르게 입력해주세요',
          },
        },
      },
      {
        id: 'cardValidateCVV',
        placeholder: 'CVV Code *',
        option: {
          required: 'CVV를 입력해주세요.',
          pattern: {
            value: REG_NUMBER,
            message: 'CVV를 올바르게 입력해주세요.',
          },
        },
      },
    ],
  },
];
