import type {HTMLInputTypeAttribute} from 'react';
import type {FieldValues, Path, RegisterOptions} from 'react-hook-form';

export interface InputType<T extends FieldValues> {
  id: Path<T>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  option?: RegisterOptions<T>;
  testId?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
}

interface NormalInputType<T extends FieldValues> {
  inputType: 'normal';
  input: InputType<T>;
}

interface GroupedInputType<T extends FieldValues> {
  inputType: 'group';
  inputs: InputType<T>[];
}

interface OptionType {
  id: string | number;
  option: string;
}

interface SelectBoxInputType<T extends FieldValues> {
  inputType: 'selectBox';
  input: InputType<T>;
  options: OptionType[];
}

interface DataPickerInputType<T extends FieldValues> {
  inputType: 'datePicker';
  input: InputType<T>;
}

export type CustomInputDatasType<T extends FieldValues> =
  | NormalInputType<T>
  | GroupedInputType<T>
  | SelectBoxInputType<T>
  | DataPickerInputType<T>;
