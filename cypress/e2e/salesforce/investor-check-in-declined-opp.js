///<reference types='cypress'/>

describe("Login to the Salesforce", () => {
    before(()=>{
        cy.login_to_SF()
    })


    it("Open closed opp", () =>{


        cy.get('#phSearchInput').type('313231')
        cy.get('#searchButtonContainer').click()
        cy.get('a[href*="0067c00000HWI59"]').contains("313231").click();
        cy.get('#00N320000033X1m_ileinner').contains('6 - Closed')

        cy.get('.detailList').eq(16).find('td').contains('Investor').next().as('Investor_name')

        cy.get("@Investor_name").should($el => expect($el.text().trim()).to.equal(''));

        

        

             
    })
})

