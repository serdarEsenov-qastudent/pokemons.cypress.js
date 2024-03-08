describe('Покупка аватара', function () {

   it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(3) > .shop__button').click(); 

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
         cy.get('.pay__main-v2').click();
         cy.get('.pay-btn').click();

         cy.get('#cardnumber').click().type('56456');
         cy.get('.payment__submit-button').click();

         cy.get('.payment__font-for-success').should('be.visible');
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');

        cy.get('.payment__adv').should('be.visible');


    })
})
