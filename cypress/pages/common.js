import 'cypress-iframe';

class Common {
    testPage = 'https://yrk.branch-master.axate.io/articles/1';
    
    // Select a random marketing preference
    selectMarketingOption(optionName) {
        const choice = this.randomChoice(); 
        cy.get(`input[name="${optionName}"][value="${choice}"]`).check();  
    }

    randomChoice() {
        return Math.random() > 0.5 ? 'true' : 'false'; 
    }
    
    //Create random email
    randomEmail() {
        return`test${Date.now()}@example.com`;
    }
    
    //Login to account
    loginAccount(country, postCode) {
        // Click on "Get a day pass" button
        cy.frameLoaded('#axate-notice');
        cy.iframe('#axate-notice').contains('a.submit-button', 'Get a day pass').click();
                
        cy.contains('a.global-submitButton', 'Continue').click();
        
        // Fill in a random email address
        cy.get('input[name="email"]').type(this.randomEmail());
        
        // Select "UK" as the country
        cy.get('select[name="country"]').select(country);
                
        // Enter a valid UK postcode
        cy.get('input[name="postcode"]').type(postCode);
        
        // Select a random marketing preference
        // Randomly select for each marketing preference
        this.selectMarketingOption('publisher_marketing_news');
        this.selectMarketingOption('publisher_marketing_offers');
        this.selectMarketingOption('axate_marketing');

        // Click "Continue" to the payment selection
        cy.get('button').contains('Continue').click();
    }

    //Redeem voucher
    redeemVoucher(voucherCode) {
        // Select payment type as Voucher
        cy.contains('span.pl-3', 'Voucher').click();

        // Enter the voucher code
        cy.get('input#voucher').type(voucherCode);

        // Click "Continue" to finalize the registration
        cy.get('input.global-submitButton[type="button"]').click();
    }
}

export default Common;
