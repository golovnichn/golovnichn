///<reference types='cypress'/>

describe("Login to the Salesforce", () => {
    before(()=>{
        cy.login_to_SF()
    })


    it("Open approved opp", () =>{

        // cy.get('#phSearchInput').type('312595')
        // cy.get('#searchButtonContainer').click()
        // cy.get('a[href*="/0067c00000HGkg5?srPos=0&srKp=006"]').contains("312595-Labert").click();
       

        cy.get('#Opportunity_Tab').click()
        cy.get('[value=" Go! "]').click()
        cy.get('.x-grid3-col-Name').eq(1).click()
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
          cy.get("@Investor_name").invoke("text").should("contains", " ");
        }
        
        cy.get('.labelCol').contains('Credit Application').next().should('not.be.empty').children().click('left')
        cy.get('.labelCol').contains('SCP Application FICO').next().should('not.be.empty')
        cy.get('.labelCol').contains('Allocation DTI').next().should('not.be.empty')

        cy.get('.detailList').eq(0).find('td').contains('Opportunity').next().find('href').click()
        cy.get('.detailList').eq(16).find('td').contains('Allocation Locked').next().dblclick().clear
        

    
        // else {
        //     cy.get('@Investor_name').should ('contain', 'Sungage Financial')
        // }

               




})
})

