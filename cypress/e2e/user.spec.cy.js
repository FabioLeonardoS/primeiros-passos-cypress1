import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  const selectorsList = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboradGrid: '.orangehrm-dashboard-grid',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    middleNameField: '[name="middleName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    listItem: '[tabindex="0"]',
    listMaritalStatus: '.oxd-select-wrapper',
    CloseButton: ".--close",
    submitButton: '[type="submit"]',


  }



  it.only('User Infor Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('Jose')
    cy.get(selectorsList.middleNameField).clear().type('das')
    cy.get(selectorsList.lastNameField).clear().type('Botas')
    cy.get(selectorsList.genericField).eq(3).clear().type('Zé das Botas')
    cy.get(selectorsList.genericField).eq(3).clear().type('1234567890')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherID123')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicense123')
    cy.get(selectorsList.genericField).eq(7).clear().type('ssnNumber123')
    cy.get(selectorsList.genericField).eq(8).clear().type('sinNumber123')
    cy.get(selectorsList.dateField).eq(0).clear().type('2036-11-11')
    cy.get(selectorsList.CloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2023-11-11')
    cy.get(selectorsList.CloseButton).click()
    cy.get(selectorsList.genericField).eq(11).clear().type('MilitaryService')
    cy.get(selectorsList.listItem).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    cy.get(selectorsList.listMaritalStatus).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()




  })
  it.skip('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).should("be.visible")

  })
})