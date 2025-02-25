import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { ReactComponent as WCalendar } from '@assets/icons/wght400/WCalendar.svg';
import { zIndex } from '@constants/zIndex';
import { mixins } from '@styles/Mixin';
import { InputType } from 'src/@types/inputField';

import Header from './components/Header';
import Input from './components/Input';
import { dataPickerClassStyle } from './styles';

interface DatePickerProps<T extends FieldValues> {
  input: InputType<T>;
  testId?: string;
}

const DatePicker = <T extends FieldValues>({
  input: { id, placeholder, option, testId: inputTestId },
  testId,
}: DatePickerProps<T>) => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, setValue } = useFormContext<T>();

  return (
    <DatePickerWrapper data-cy={testId}>
      <DatePickerLabelWrapper>
        <ReactDatePicker
          dateFormat="MM.dd.yy"
          selected={startDate}
          onChange={(date: Date) => {
            if (date) {
              setStartDate(date);
              setValue(id, startDate as PathValue<T, Path<T>>);
            }
          }}
          placeholderText={placeholder}
          customInput={
            <Input
              {...register(id, {
                ...option,
              })}
              testId={inputTestId}
            />
          }
          renderCustomHeader={Header}
        />
        <WCalendar />
      </DatePickerLabelWrapper>
    </DatePickerWrapper>
  );
};

const DatePickerWrapper = styled.div`
  z-index: ${zIndex.datePicker};
  position: relative;
  width: 100%;
  max-height: 56px;
`;

const DatePickerLabelWrapper = styled.label`
  ${dataPickerClassStyle}
  ${mixins.flexBox({ justify: 'space-between' })}
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};

  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default DatePicker;
