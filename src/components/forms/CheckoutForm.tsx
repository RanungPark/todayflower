import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PrimaryButton from '@components/buttons/PrimaryButton';
import DefaultTextField from '@components/textfields/DefaultTextField';
import DatePicker from '@components/utilities/DatePicker';
import DropDown from '@components/utilities/DropDown';
import { InputTextsType } from '@data/inputDatas';
import { mixins } from '@styles/Mixin';

interface CheckoutFormProps {
  onSubmit: () => void;
  checkoutFormDatas: InputTextsType[];
}

const CheckoutForm = ({ onSubmit, checkoutFormDatas }: CheckoutFormProps) => {
  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const { register, handleSubmit } = useForm();

  return (
    <CheckoutFormWrapper onSubmit={handleSubmit(onSubmit)}>
      {checkoutFormDatas.map(
        ({ component, registerValue, placeholder, ...rest }) => {
          if (component === 'textField') {
            return (
              <DefaultTextField key={uuidv4()}>
                <input
                  {...register(registerValue, {
                    required: rest?.required,
                    pattern: rest.pattern && {
                      value: rest.pattern.value,
                      message: rest.pattern.message,
                    },
                  })}
                  data-cy={`${registerValue}Input`}
                  placeholder={placeholder}
                  aria-label={registerValue}
                />
              </DefaultTextField>
            );
          } else if (component === 'datePicker') {
            return (
              <DatePicker
                placeholder={placeholder}
                value={selectedDate}
                key={uuidv4()}
                onChange={handleDateChange}
              />
            );
          } else if (component === 'selectBox') {
            return (
              <DropDown
                value={selectValue}
                onChange={setSelectValue}
                options={rest.options ? rest.options : []}
                placeholder={placeholder}
                testId={`${registerValue}Input`}
                key={uuidv4()}
              />
            );
          }
          return null;
        },
      )}
      <PrimaryButton onClick={handleSubmit(onSubmit)} testId="nextStepBtn">
        Continue to Payment
      </PrimaryButton>
    </CheckoutFormWrapper>
  );
};

const CheckoutFormWrapper = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;

  width: 100%;
`;

export default CheckoutForm;
