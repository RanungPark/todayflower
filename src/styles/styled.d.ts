import 'styled-components';
import type {Theme} from './theme';

declare module 'styled-components' {
  type DefaultTheme = {} & Theme;
}
