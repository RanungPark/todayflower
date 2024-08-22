describe('상품 페이지간 이동 테스트', () => {
  beforeEach(() => {
    cy.addToCart();
  });

  it('추가 상품을 통해 다른 카테고리의 다른 상품의 페이지로 이동할 수 있다.', () => {
    cy.get('[data-cy=aroma_candles_1]').as('aromaCandles1');
    cy.get('@aromaCandles1').should('exist').click();

    cy.url().should('include', '/categories/aroma_candles/products/1');

    cy.get('[data-cy=plusBtn]').as('plusBtn');
    cy.get('@plusBtn').should('exist').click();

    cy.get('[data-cy=addBtn]').as('addBtn');
    cy.get('[data-cy=addBtn]').should('exist').click();
  });
});
