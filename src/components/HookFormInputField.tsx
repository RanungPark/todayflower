import React from 'react';
import {useFormContext, type FieldValues} from 'react-hook-form';

import {InputField} from '@todayflower-public/ui';
import type {ValidationState} from 'src/@types/common';
import type {InputType} from 'src/@types/inputField';

interface HookFormInputFieldProps<T extends FieldValues> {
  input: InputType<T>;
  children?: React.ReactNode;
  helpTestId?: string;
}

const HookFormInputField = <T extends FieldValues>({
  input: {id, type = 'text', placeholder, option, onChange},
}: HookFormInputFieldProps<T>) => {
  const {
    register,
    formState: {errors, isSubmitSuccessful},
  } = useFormContext<T>();

  const errorMessage = errors[id]?.message?.toString();

  const validationState: ValidationState = isSubmitSuccessful ? 'success' : errors[id] ? 'error' : 'default';

  return (
    <div style={{width: '100%'}}>
      <InputField
        input={
          <InputField.Input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(id, {
              ...option,
              onChange: (e) => {
                if (onChange) {
                  onChange(e);
                }
              },
            })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
        }
        helpMessage={
          validationState !== 'default' && (
            <InputField.HelpMessage>
              {validationState === 'success' ? '입력에 성공하였습니다.' : errorMessage}
            </InputField.HelpMessage>
          )
        }
        status={validationState}
      />
    </div>
  );
};

export default HookFormInputField;
