import { ReactNode } from 'react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

import Input from './components/RadioButton';

type RadioButtonOption = {
  value: string;
  label: string;
};

type RadioButtonType<T extends FieldValues> = {
  id: Path<T>;
  options: RadioButtonOption[];
};

interface RadioButtonFormProps<T extends FieldValues> {
  radioButton: RadioButtonType<T>;
  children?: ReactNode;
  required?: string;
}

const RadioButtonForm = <T extends FieldValues>({
  radioButton: { id, options },
  children,
  required,
}: RadioButtonFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <RadioButtonFormStyled>
      <Legend as="p">{children}</Legend>
      <Controller
        name={id}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <RadioButtonGroup>
            {options.map(({ value, label }, index) => (
              <Input<T>
                key={`${id}-${index}`}
                field={field}
                value={value}
                label={label}
              />
            ))}
          </RadioButtonGroup>
        )}
      />
    </RadioButtonFormStyled>
  );
};

const RadioButtonFormStyled = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;
`;

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.Subtitle}
  margin-bottom: 16px;
`;

export default RadioButtonForm;
