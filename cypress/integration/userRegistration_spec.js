import 'cypress-iframe';
import Common from '../pages/common.js'

const page = new Common()

describe('User Registration on Axate', () => {
    it('Registers a new user successfully', () => {
        // Visit the article page
        cy.visit(page.testPage)

        //Login to Account using GB country and N5 1FL postcode
        page.loginAccount('GB', 'N5 1FL')

        // Choose first selectable amount and continue
        cy.get('button').contains('Continue').click() 
        
        // Select payment type as Voucher and redeem 'QA2024' voucher
        page.redeemVoucher('QA2024')

        // Check for confirmation message
        cy.frameLoaded('#iframe__popup_notices')
        cy.iframe('#iframe__popup_notices').contains('You are ready to read your first article').should('be.visible')
    });
});
