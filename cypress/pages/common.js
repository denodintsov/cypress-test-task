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
    
}

export default Common;