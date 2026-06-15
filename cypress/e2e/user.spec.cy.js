import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinforPage from '../pages/myinforPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyinforPage()

describe('User Infor Update', () => { 

  it.only('User Infor Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails("John", "Doe", "Smith")
    myInfoPage.fillOtherDetails("John Doe", "EMP001", "DL001", "SSN001", "SIN001")
    myInfoPage.fillDateOfField("2020-01-03")
    myInfoPage.fillDateOfBirth("1990-01-01")
    myInfoPage.fillmaritalStatus("Married")
    //myInfoPage.fillMilitaryService("No")
    myInfoPage.fillNationality("27")
    myInfoPage.fillListItem("1")
    myInfoPage.submitForm()
    myInfoPage.checkSuccessMessage()  

   
  })
  it.skip('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).should("be.visible")

  })
})