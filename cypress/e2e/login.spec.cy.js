import userData from '../fixtures/users/userData.json'

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
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.dashboradGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredentialAlert).should("be.visible")
    
  })
})