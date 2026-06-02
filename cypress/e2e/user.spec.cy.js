import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboradGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  lastNameField: '[name="lastName"]',
  middleNameField: '[name="middleName"]',
  genericField: '.oxd-input--active',
  dateField:'[placeholder="yyyy-mm-dd"]',
  listItem: ".oxd-select-text-input",
  CloseButton: ".--close",
  submitButton: '[type="submit"]',
  

}



  it.only('User Infor Update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.dashboradGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Jose')
    cy.get(selectorsList.middleNameField).clear().type('das')
    cy.get(selectorsList.lastNameField).clear().type('Botas')
    cy.get(selectorsList.genericField).eq(3).clear().type('Zé das Botas')
    cy.get(selectorsList.genericField).eq(4).clear().type('1234567890')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherID123')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicense123')
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumber123')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumber123')
    cy.get(selectorsList.dateField).eq(0).clear().type('2036-11-11')
    cy.get(selectorsList.CloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2023-11-11')
    cy.get(selectorsList.CloseButton).click()
    cy.get(selectorsList.genericField).eq(11).clear().type('MilitaryService')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()

    //cy.get(selectorsList.listItem).eq(0).click('tabindex="26"').click()
    //cy.get(selectorsList.genericField).eq(9).clear().type()
         


  })
  it.skip('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredentialAlert).should("be.visible")
    
  })
})