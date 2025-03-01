import { ReactNode } from 'react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

import Input from './components/Input';

type CheckboxOption = {
  value: string;
  label: string;
};

type CheckboxType<T extends FieldValues> = {
  id: Path<T>;
  options: CheckboxOption[];
};

interface CheckboxFormProps<T extends FieldValues> {
  checkbox: CheckboxType<T>;
  children?: ReactNode;
  required?: string;
}

const CheckboxForm = <T extends FieldValues>({
  checkbox: { id, options },
  children,
  required,
}: CheckboxFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <CheckboxFormStyled>
      <Legend as="p">{children}</Legend>
      <Controller
        name={id}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <CheckboxGroup>
            {options.map(({ value, label }, index) => (
              <Input<T>
                key={`${id}-${index}`}
                field={field}
                value={value}
                label={label}
              />
            ))}
          </CheckboxGroup>
        )}
      />
    </CheckboxFormStyled>
  );
};

const CheckboxFormStyled = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.Subtitle}
  margin-bottom: 16px;
`;

export default CheckboxForm;
