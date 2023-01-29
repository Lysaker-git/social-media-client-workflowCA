const userMail = 'testerMail987@noroff.no';
const userPass =  'testerPassword';

const wrongMail = "this.is.not.a.mail"
const wrongPass = ".!129--"

describe('login', () => {
    beforeEach(() => {
        cy.visit('https://lysaker-git.github.io/social-media-client-workflowCA/')
        cy.wait(1000)
        cy.get('#registerForm').within(() => {
            cy.get('[data-bs-dismiss="modal"]')
                .contains('Close')
                .click()
        })
        cy.get('[data-bs-target="#loginModal"]')
            .contains('Login')
            .click()
        cy.get('#loginForm')
            .should('be.visible')
    })
    it('logs user in after right credentials', () => {
        cy.get("#loginEmail").within(() => {
            cy.root().type(userMail, {delay: 0})
            cy.wait(1000)
            expect(cy.root().should('have.value', userMail))
        })
        cy.get('#loginPassword').within(() => {
            cy.root().type(userPass, {delay: 0})
            cy.wait(1000)
            expect(cy.root().should('have.value', userPass))
        })
        cy.get('#loginForm').within(() => {
            cy.get('[type="submit"]').click()
        })
        cy.location().should((loc) => {
            expect(loc.href).to.include('profile')
        })
    })
    it('can log out with the logout button', () => {
        cy.get("#loginEmail").within(() => {
            cy.root().type(userMail, {delay: 0})
            cy.wait(1000)
            expect(cy.root().should('have.value', userMail))
        })
        cy.get('#loginPassword').within(() => {
            cy.root().type(userPass, {delay: 0})
            cy.wait(1000)
            expect(cy.root().should('have.value', userPass))
        })
        cy.get('#loginForm').within(() => {
            cy.get('[type="submit"]').click()
        })
        cy.wait(2000)
        cy.get('[data-auth="logout"]').click()
        cy.location().should((loc) => {
            expect(loc.href).to.not.include('profile')
        })
    })
    it('can not log in with the wrong credentials', () => {
        cy.get("#loginEmail").within(() => {
            cy.root().type(wrongMail, {delay: 0})
            cy.wait(1000)
            cy.root().should('have.value', wrongMail)
        })
        cy.get('#loginPassword').within(() => {
            cy.root().type(wrongPass, {delay: 0})
            cy.wait(1000)
            cy.root().should('have.value', wrongPass)
        })
        cy.get('#loginForm').within(() => {
            cy.get('[type="submit"]').click()
        })
        cy.location().should((loc) => {
            expect(loc.href).to.not.include('profile')
        })
        cy.on('window:alert', (content) => {
            expect(content).include('Either your username was not found or your password is incorrect')
        })
        cy.then(() => {
            expect(localStorage.getItem("token")).to.eq(null)
        })
    })
})