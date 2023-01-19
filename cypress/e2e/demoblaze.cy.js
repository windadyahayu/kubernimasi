describe('template spec', () => {
  it('Login demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('username').should('be.visible')
    cy.wait(2)
    cy.get('#loginpassword').type('passwordddd')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


  })
})

//describe> isi test scenario
//cy> isi perintah buat apa

describe('template spec', () => {
  it('Login demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('windadyahayu').should('be.visible')
    cy.wait(2)
    cy.get('#loginpassword').type('1234')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


  })
})

describe('template spec', () => {
  it('Click Content demoblaze', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('windadyahayu').should('be.visible')
    cy.wait(2)
    cy.get('#loginpassword').type('1234')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()



  })
})