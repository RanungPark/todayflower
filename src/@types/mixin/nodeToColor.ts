import type {Color} from '../theme';
import type {PartialOptional} from '../utils';

type nodeToColorType = 'colorAndFill' | 'bgColor' | 'borderColor';

type nodeToColorProps = Record<nodeToColorType, Color>;

export type OptionalButtonProps = PartialOptional<nodeToColorProps, 'bgColor' | 'borderColor'>;

export type PickInputProps = Pick<nodeToColorProps, 'colorAndFill' | 'borderColor'>;
