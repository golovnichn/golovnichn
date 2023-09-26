///<reference types='cypress'/>
///<reference types='cypress-xpath'/>

describe('Mimic funding for allocation', () => {
    
    it('create a project', () => {
        cy.login_as_Gemma()
        cy.create_a_new__approved_project()
        cy.get('@oppId').then(oppId => {
            const newURL = `https://sungage--stg.sandbox.my.site.com/projects/ProjectOverview?id=${oppId}`;
            cy.log(newURL);
        
            cy.visit(newURL);
          });
        cy.Launch_an_approved_creditApp()

    })

    it.only('open approved project', () => {
        cy.login_to_SF()
        cy.get('#Opportunity_Tab').click()
        cy.get('[value=" Go! "]').click()
        cy.get('.x-grid3-cell-inner').contains('2 - Approved').first().as('appr')
       cy.get('@appr').parent().prev().click()

    cy.get('.detailList').eq(0).contains('2 - Approved').as('approved_opp')

    cy.get('.detailList').eq(16).find('td').contains('Investor').next().as('Investor_name') 
    // cy.contains('Investor').next().as('Investor_name') 

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

    cy.get('[value="Re-Run Approval Allocation"]').first().click()
      cy.on('window:confirm', (str)  => {
        expect(str).to.equal('Are you sure you want to re-run the allocation at approval for this project?')
      })
      cy.on('window:confirm', (str)  => true)

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


    // cy.contains('Allocation Locked').next().dblclick().clear()
    cy.contains('Allocation Locked').next().dblclick().type('{del}')
    cy.wait(5000)
    cy.get('[name="inlineEditSave"]').first().click()
  

  

    cy.contains('Customer Confirmed Install').next().dblclick();
    cy.get('.datePicker').find('.calToday').contains('Today').click({ force: true }).type('{enter}')
    cy.contains('Customer Confirmed Install').next().type('{enter}')
    cy.wait(3000)
    
    cy.contains('Install Certification Date').click()
    cy.contains('Install Certification Date').next().dblclick({ force: true });
    cy.get('.datePicker').find('.calToday').contains('Today').click({ force: true })
    cy.wait(3000)

    cy.get('[name="inlineEditSave"]').first().click()

    cy.contains('Install Certification Name').next().dblclick().type('Sun{enter}')
    cy.get('[name="inlineEditSave"]').first().click()




    cy.contains('Ready For Funding').next().dblclick({ force: true });
    cy.get('.datePicker').trigger('mousemove').find('.calToday').contains('Today').click({ force: true })

    cy.contains('First Disbursement Doc Complete').next().dblclick({ force: true });
    cy.get('.datePicker').trigger('mousemove').find('.calToday').contains('Today').click({ force: true })

    cy.get('[name="inlineEditSave"]').last().click({ force: true })




    cy.get('.labelCol').contains('Credit Application').next().should('not.be.empty').children().click('left')
    // cy.get('.labelCol').contains('SCP Application FICO').next().should('not.be.empty')
    // cy.get('.labelCol').contains('Allocation DTI').next().should('not.be.empty')
    // });
    // cy.get('.detailList').eq(0).find('td').contains('Opportunity').next().click({ force: true })




    // onfocus="DatePicker

})
})