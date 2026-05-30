

describe('Orange HRM Tests', () => {
  const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboradGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert'

}
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.dashboradGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('teste')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredentialAlert).should("be.visible")
    
  })
})