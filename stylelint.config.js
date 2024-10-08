module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended'],
  customSyntax: 'postcss-styled-syntax',
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'declaration-empty-line-before': [
      'always',
      {
        ignore: [
          'first-nested',
          'after-comment',
          'after-declaration',
          'inside-single-line-block',
        ],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
    // CSS 속성 그룹 및 순서 설정
    'order/properties-order': [
      {
        groupName: 'Layout',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'display',
          'visibility',
          'overflow',
          'overflow-x',
          'overflow-y',
          'float',
          'clear',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'flex',
          'flex-direction',
          'align-items',
          'justify-content',
          'align-content',
          'grid',
          'grid-template-rows',
          'grid-template-columns',
          'gap',
        ],
      },
      {
        groupName: 'Box',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'width',
          'max-width',
          'min-width',
          'height',
          'max-height',
          'min-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'box-shadow',
          'border-radius',
          'border-width',
          'border-style',
        ],
      },
      {
        groupName: 'Background',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'background-color',
          'background-image',
          'background-position',
          'background-repeat',
          'background-size',
          'background-clip',
          'background-attachment',
        ],
      },
      {
        groupName: 'Font',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'color',
          'font-style',
          'font-weight',
          'font-size',
          'line-height',
          'letter-spacing',
          'text-align',
          'text-indent',
          'vertical-align',
          'white-space',
          'font-family',
          'font-variant',
          'text-transform',
          'text-overflow',
        ],
      },
      {
        groupName: 'Pointer',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: ['cursor', 'pointer-events'],
      },
      {
        groupName: 'SVG',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'fill',
          'stroke',
          'stroke-width',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-opacity',
        ],
      },
      {
        groupName: 'Animation',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: ['animation', 'transition', 'transform'],
      },
      {
        groupName: 'Miscellaneous',
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'opacity',
          'visibility',
          'filter',
          'outline',
          'clip',
          'list-style',
          'appearance',
          'content',
        ],
      },
    ],
  },
};
