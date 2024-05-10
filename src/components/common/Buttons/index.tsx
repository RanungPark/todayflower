import Text from '../Text';
import { PartialOptional, PartialRequired } from 'src/@types/utils';
import styled from 'styled-components';
import { StyledButton } from './Buttons.css';
import Icon from '../Icon';

export interface ButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  leftIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  isDisabled: boolean;
  colorType: 'primary' | 'secondary' | 'tertiary';
  textOrIcon: 'withText' | 'onlyIcon';
  buttonType: 'contained' | 'none';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type RequiredFromButtonsProps = PartialRequired<
  ButtonsProps,
  'label' | 'buttonType'
>;

type PickStyledButtonsProps = Pick<ButtonsProps, 'buttonType' | 'colorType'>;

type PickPublicButtonProps = Pick<
  ButtonsProps,
  'label' | 'leftIcon' | 'rightIcon' | 'textOrIcon' | 'buttonType'
>;

type OptionalFromPublicButtonProps = PartialOptional<
  PickPublicButtonProps,
  'leftIcon' | 'rightIcon'
>;

const Buttons = ({
  label,
  leftIcon,
  rightIcon,
  colorType = 'primary',
  textOrIcon = 'withText',
  buttonType,
  isDisabled = false,
  onClick,
}: RequiredFromButtonsProps) => {
  return (
    <StyledButtons
      disabled={isDisabled}
      onClick={onClick}
      colorType={colorType}
      buttonType={buttonType}
    >
      <PublicButtonComponent
        label={label}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        textOrIcon={textOrIcon}
        buttonType={buttonType}
      />
    </StyledButtons>
  );
};

function PublicButtonComponent({
  label,
  leftIcon,
  rightIcon,
  textOrIcon,
  buttonType,
}: OptionalFromPublicButtonProps) {
  return (
    <>
      {leftIcon !== undefined ? <Icon as={leftIcon} /> : <></>}
      {buttonType === 'contained' ? (
        <Text as="p" typography="Button">
          {label}
        </Text>
      ) : (
        <Text as="p" typography="Links">
          {textOrIcon === 'withText' && label}
        </Text>
      )}
      {rightIcon !== undefined ? <Icon as={rightIcon} /> : <></>}
    </>
  );
}

const StyledButtons = styled.button<PickStyledButtonsProps>`
  ${({ buttonType, colorType }) =>
    buttonType === 'contained'
      ? StyledButton.contained({ colorType })
      : StyledButton.none()}
`;

export default Buttons;
