///<reference types='cypress'/>
///<reference types='cypress-xpath'/>

describe("New approved credit app", () => {


    it('Create and launch an approved credit app', () => {
        cy.login_as_Gemma()
        cy.create_a_new__approved_project() 
        cy.get('@oppId').then(oppId => {
            const newURL = `https://sungage--stg.sandbox.my.site.com/projects/ProjectOverview?id=${oppId}`;
            cy.log(newURL);
        
            cy.visit(newURL);
          });
        cy.Launch_an_approved_creditApp()

});

it("Open approved opp", () =>{
    cy.login_to_SF()
    // cy.visit('https://sungage--stg.sandbox.my.salesforce.com/' + {oppId})
    
    cy.get('#Opportunity_Tab').click()
    cy.get('[value=" Go! "]').click()
    cy.get('.x-grid3-col-Name').eq(0).click()
    cy.get('.detailList').eq(0).contains('2 - Approved').as('approved_opp')

    cy.get('.detailList').eq(16).find('td').contains('Investor').next().as('Investor_name') 

    if (cy.get("@approved_opp")) {
      cy.get("@Investor_name")
        .invoke("text")
        .should("be.oneOf", [
          "NBT",
          "BAWAG",
          "Amalgamated Bank",
          "ING",
          "Key Bank",
          "Sungage Financial",
        ]);
    } else {
        cy.get("@Investor_name").should($el => expect($el.text().trim()).to.equal(''))
    }
    
    cy.get('.labelCol').contains('Credit Application').next().should('not.be.empty').children().click('left')
    cy.get('.labelCol').contains('SCP Application FICO').next().should('not.be.empty')
    cy.get('.labelCol').contains('Allocation DTI').next().should('not.be.empty')
   




})
})
