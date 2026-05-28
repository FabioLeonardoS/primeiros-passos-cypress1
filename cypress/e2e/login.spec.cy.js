describe('Orange HRM Tests', () => {
  it.skip('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text", "Dashboard")
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('teste')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click() 
    cy.get('.oxd-alert') 
  })
})