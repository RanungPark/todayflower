import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Option from '@components/selectBox/components/Option';
import { useSelectBox } from '@contexts/SelectBoxContext';

interface OptionsProps<T> {
  id: Path<T>;
  options: string[];
}

const Options = <T extends FieldValues>({ id, options }: OptionsProps<T>) => {
  const { setValue } = useFormContext<T>();

  const { isOpen, handleClickLi } = useSelectBox();

  const handleClick = (e: React.MouseEvent) => {
    const optionValue = e.currentTarget.getAttribute('data-value');

    if (!optionValue) return;

    setValue(id, optionValue as PathValue<T, Path<T>>);
    handleClickLi(optionValue);
  };

  return (
    <>
      {isOpen && (
        <OptionsStyled>
          {options.map((option, index) => (
            <Option
              onClick={handleClick}
              key={`option_${index}`}
              testId={`option${index + 1}`}
            >
              {option}
            </Option>
          ))}
        </OptionsStyled>
      )}
    </>
  );
};

const OptionsStyled = styled.ul`
  width: 100%;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray};

  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & > li:last-child {
    border-bottom: none;
  }
`;

export default Options;
