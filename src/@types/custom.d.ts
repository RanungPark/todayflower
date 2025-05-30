declare module '*.svg?component' {
  import type * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export {ReactComponent};
}

declare module '*.svg' {
  const src: string;
  export default src;
}
