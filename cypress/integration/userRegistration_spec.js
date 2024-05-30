import 'cypress-iframe';
import Common from '../pages/common.js'

const page = new Common()

describe('User Registration on Axate', () => {
    it('Registers a new user successfully', () => {
        // Visit the article page
        cy.visit(page.testPage);

        // Click on "Get a day pass" button
        cy.frameLoaded('#axate-notice');
        cy.iframe('#axate-notice').contains('a.submit-button', 'Get a day pass').click();
        
        cy.contains('a.global-submitButton', 'Continue').click();

        // Fill in a random email address
        cy.get('input[name="email"]').type(page.randomEmail());

        // Select "UK" as the country
        cy.get('select[name="country"]').select('GB');
        
        // Enter a valid UK postcode
        cy.get('input[name="postcode"]').type('N5 1FL');

        // Select a random marketing preference
        // Randomly select for each marketing preference
        page.selectMarketingOption('publisher_marketing_news');
        page.selectMarketingOption('publisher_marketing_offers');
        page.selectMarketingOption('axate_marketing');

        // Click "Continue" to the payment selection
        cy.get('button').contains('Continue').click();

        // Choose first selectable amount and continue
        cy.get('button').contains('Continue').click(); 
        
        // Select payment type as Voucher
        cy.contains('span.pl-3', 'Voucher').click();

        // Enter the voucher code
        cy.get('input#voucher').type('QA2024');

        // Click "Continue" to finalize the registration
        cy.get('input.global-submitButton[type="button"]').click();

        // Check for confirmation message
        cy.frameLoaded('#iframe__popup_notices');
        cy.iframe('#iframe__popup_notices').contains('You are ready to read your first article').should('be.visible');
    });
});
