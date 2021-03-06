/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(1).click()

    });

    it.only('Deve adicionar o item ao carrinho', () => {
        let quantidade = 5


        cy.get('[class="product-block grid"]').eq(2).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')




    });

});