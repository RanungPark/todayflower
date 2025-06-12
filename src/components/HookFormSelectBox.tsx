import type {FieldValues, Path, PathValue} from 'react-hook-form';
import {useFormContext} from 'react-hook-form';
import {useState} from 'react';

import {SelectBox} from '@todayflower-public/ui';
import type {OptionType} from '@todayflower-public/ui/dist/SelectBox';
import type {InputType} from 'src/@types/inputField';

interface LabelProps<T extends FieldValues> {
  input: InputType<T>;
  options: OptionType[];
  disabled?: boolean;
}

const HookFormSelectBox = <T extends FieldValues>({
  input: {id, type = 'text', placeholder, option},
  options,
  disabled,
}: LabelProps<T>) => {
  const {register, setValue} = useFormContext<T>();
  const [select, setSelect] = useState<string>('');

  const handleChange = (i: string | number) => {
    const selectOption = options.find((v) => v.id === i);
    if (selectOption) {
      setValue(id, selectOption.option as PathValue<T, Path<T>>);
      setSelect(selectOption.option);
    }
  };

  return (
    <SelectBox
      input={
        <SelectBox.Input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, {
            ...option,
          })}
          value={select}
        />
      }
      options={<SelectBox.Options options={options} handleChange={handleChange} />}
    />
  );
};

export default HookFormSelectBox;
