import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type InputType<T extends FieldValues> = {
  id: Path<T>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  option?: RegisterOptions<T>;
  testId?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
};

type NormalInputType<T extends FieldValues> = {
  inputType: 'normal';
  input: InputType<T>;
};

type GroupedInputType<T extends FieldValues> = {
  inputType: 'group';
  inputs: InputType<T>[];
};

type SelectBoxInputType<T extends FieldValues> = {
  inputType: 'selectBox';
  input: InputType<T>;
  options: string[];
};

type DataPickerInputType<T extends FieldValues> = {
  inputType: 'datePicker';
  input: InputType<T>;
};

export type CustomInputDatasType<T extends FieldValues> =
  | NormalInputType<T>
  | GroupedInputType<T>
  | SelectBoxInputType<T>
  | DataPickerInputType<T>;
