describe('template spec', () => {
    it('login herokuapp', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('username')
        cy.get('#password').type('username')
        cy.get('.fa').click()
    })
})

describe('template spec', () => {
    it('login herokuapp', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })
})