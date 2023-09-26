///<reference types='cypress'/>
///<reference types='cypress-xpath'/>

describe("New approved credit app", () => {
    before(() => {
      cy.login_as_Gemma();
    cy.create_a_new_closed_project(); 
    cy.get('@oppId').then(oppId => {
      const newURL = `https://sungage--stg.sandbox.my.site.com/projects/ProjectOverview?id=${oppId}`;
      cy.log(newURL);
  
      cy.visit(newURL);
    });
    });
  
    it("create a closed credit app", () => {

      cy.get('[type="button"]')
        .contains(" Launch Application")
        .click({ force: true });
      cy.get('[type="button"]').contains("Get Started ").click({ force: true });
  
      cy.url().should("include", "/PrimaryPersonal");
      cy.get("#primary_personal_Tax_ID__c").type("666323781");
      cy.get("#primary_personal_primaryDOBMonth").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("3 - March")
        .click();
  
      cy.get("#primary_personal_primaryDOBDay").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .find("li")
        .contains("15")
        .click();
  
      cy.get("#primary_personal_primaryDOBYear").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("1980")
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
      cy.get(".ant-select-dropdown-menu").find("li").eq(0).click({ force: true });
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
      cy.get(".ant-select-dropdown-menu").find("li").eq(2).click({ force: true });
      cy.get('[type = "submit"]').click({ force: true });
  
      // cy.get('#primary_employment_Employer__c').type('company')
      // cy.get('#primary_employment_Job_Title__c').type('ceo')
      cy.url().should("include", "/AdditionalPropertyDetail");
      cy.get("#primary_applicant_Property_Mortgaged__c").click();
      cy.get(".ant-select-dropdown")
        .not(".ant-select-dropdown-hidden")
        .contains("No")
        .click({ force: true });
      cy.get("#primary_applicant_Occupancy_Duration__c").click();
      cy.get(".ant-select-dropdown-menu")
        .find("li")
        .contains("5 years")
        .click({ force: true });
      cy.get('[type = "submit"]').click({ force: true });
  
      // cy.get('#primary_applicant_Occupancy_Duration__c').click()
      // cy.get('.ant-select-dropdown-menu').find('li').contains('5 years').click({ force: true })
      // cy.get('[type = "submit"]').click({force:true})
  
      cy.url().should("include", "/apply/CreditApp");
      cy.get('[type = "button"]')
        .contains("No - Don't Add an Applicant")
        .click({ force: true });
      
  
      cy.url().should("include", "/Finish");
      cy.get('[type = "submit"]').click({ force: true });
    });
  });
  