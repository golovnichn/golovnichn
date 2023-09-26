// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })



Cypress.Commands.add('login_to_SF', (username, password) =>{
    cy.visit('https://test.salesforce.com/')
    cy.get('#username').click().type('natallia.halounich@sungagefinancial.com.sun.stg')
    // cy.wait(3000)
    cy.get('#password').click().type('gomEL1993')
    // cy.wait(3000)
    cy.get('#Login').click()   

})

Cypress.Commands.add('login_as_Gemma', () =>{
    cy.visit('https://sungage--stg.sandbox.my.site.com/projects/InstallerPortalLogin')
    cy.get('.control-label').contains('Username').nextAll().type('evan.mcdaniel+gemma@sungagefinancial.com')
    cy.get('.control-label').contains('Password').nextAll().type('Sungage1')
    cy.get('[value="Login"]').click()
})


    Cypress.Commands.add('create_a_new__approved_project', createNewApp)
    function createNewApp () {
        cy.get('.btn-text').contains('New Project').click()
        cy.url().should('include', '/projectbuilder')
        cy.get('[placeholder="First Name"]').type('Debra')
        cy.get('[placeholder="Last Name"]').type('Polizzi')
        cy.get('[placeholder="Email Address"]').type('draconian.giraffe7425@maildrop.cc')
        cy.get('[placeholder="Phone"]').type('5555555222')
        cy.get('[placeholder="Street"]').type('538 E OAK ST')
        cy.get('[placeholder="City"]').type('Brownstown')
        cy.get('#projectbuilder_State__c').type('IL')
        cy.get('[placeholder="Zip Code"]').type('62418')
        cy.get('#next').click()
        cy.get('#projectbuilder_Solar_Cost__c').type('25000')
  
        cy.location().then(loc => {
            const url = loc.href;
            const regex = /id=([^&]+)/;
            const match = url.match(regex);
            const oppId = match ? match[1] : null;
            cy.wrap(oppId).as('oppId');
          
          
        });
        cy.get('#projectbuilder_System_Size_kW_STC__c').type('10')
        cy.get('#projectbuilder_System_mounting__c').click()
        cy.get('.ant-select-dropdown>*').find('ul').find('li').eq(1).click().contains('Roof of Residence')
        cy.get('#next').click()
        cy.get('#done').click()
    }


    Cypress.Commands.add('create_a_new_closed_project', createNewClosedApp) 
    function createNewClosedApp () {
        cy.get('.btn-text').contains('New Project').click()
        cy.url().should('include', '/projectbuilder')
        cy.get('[placeholder="First Name"]').type('CINDY')
        cy.get('[placeholder="Last Name"]').type('COMMINGS')
        cy.get('[placeholder="Email Address"]').type('draconian.giraffe7425@maildrop.cc')
        cy.get('[placeholder="Phone"]').type('5555555222')
        cy.get('[placeholder="Street"]').type('7235 US ROUTE 127 ')
        cy.get('[placeholder="City"]').type('VAN WERT')
        cy.get('#projectbuilder_State__c').type('OH')
        cy.get('[placeholder="Zip Code"]').type('45891')
        cy.get('#next').click()
        cy.get('#projectbuilder_Solar_Cost__c').type('45000')

        cy.location().then(loc => {
            const url = loc.href;
            const regex = /id=([^&]+)/;
            const match = url.match(regex);
            const oppId = match ? match[1] : null;
            cy.wrap(oppId).as('oppId');
          
          
        });

        cy.get('#projectbuilder_System_Size_kW_STC__c').type('10')
        cy.get('#projectbuilder_System_mounting__c').click()
        cy.get('.ant-select-dropdown>*').find('ul').find('li').eq(1).click().contains('Roof of Residence')
        cy.get('#next').click()
        cy.get('#done').click()

    }

    Cypress.Commands.add("Launch_an_approved_creditApp", () => {
      cy.get('[type="button"]')
        .contains(" Launch Application")
        .click({ force: true });
      cy.get('[type="button"]').contains("Get Started ").click({ force: true });
      cy.url().should("include", "/PrimaryPersonal");
      cy.get("#primary_personal_Tax_ID__c").type("666495180");
      cy.get("#primary_personal_primaryDOBMonth").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("5 - May")
        .click();
      cy.get("#primary_personal_primaryDOBDay").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .find("li")
        .contains("1")
        .click();
      cy.get("#primary_personal_primaryDOBYear").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("1995")
        .click({ force: true });
      cy.get("#primary_personal_Consented_to_E_Signature__c")
        .check()
        .should("be.checked");
      cy.get("#primary_personal_Consented_to_Prequal__c")
        .check()
        .should("be.checked");
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should("include", "/Property");
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should("include", "/PropertyDetail");
      cy.get("#property_Property_Ownership__c").click();
      cy.get(".ant-select-dropdown-menu")
        .find("li")
        .eq(0)
        .click({ force: true });
      // .contains('Debra Polizzi').click({ force: true })
      cy.get("#property_Property_Type__c").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("Single-Family")
        .click({ force: true });
      cy.get("#property_Reverse_Mortgage__c").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("No")
        .click({ force: true });
      cy.get("#property_Residency_Type__c").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("Primary")
        .click({ force: true });
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should("include", "/PrimaryEmployment");
      cy.get("#primary_employment_Employment_Status__c").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("Retired")
        .click({ force: true });
      cy.get("#primary_employment_Annual_Income__c").type("150000");
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should("include", "/PrimaryContact");
      // cy.get('#primary_applicant_Email__c').should('not.be.empty')
      // cy.get('#primary_applicant_Phone__c').should('not.be.empty')
      cy.get("#primary_applicant_Primary_Applicant_Phone_Type__c").click();
      cy.get(".ant-select-dropdown-menu")
        .find("li")
        .eq(2)
        .click({ force: true });
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should("include", "/AdditionalPropertyDetail");
      cy.get("#primary_applicant_Occupancy_Duration__c").click();
      cy.get(".ant-select-dropdown-menu")
        .find("li")
        .contains("5 years")
        .click({ force: true });
      cy.get('[type = "submit"]').click({ force: true });
      cy.url().should('include', '/apply/CreditApp')
      cy.get('[type = "button"]').contains("No - Don't Add an Applicant").click({ force: true })
      cy.url().should('include', '/Finish')
      cy.get('[type = "submit"]').click({force:true})
    });

    // Cypress.Commands.add("Check_investor_in_approved_opp", () => {

    // })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })