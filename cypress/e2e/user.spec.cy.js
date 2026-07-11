import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinforPage from '../pages/myinforPage'
const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyinforPage()

describe('Login Orange HRM Tests', () => { 

  it ('User Infor Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.animal())
    myInfoPage.fillOtherDetails(chance.name(), "EMP001", "DL001", "SSN001", "SIN001")
    myInfoPage.fillDateOfField(chance.date({string: true, american: false}), chance.date({string: true, american: false}), chance.date({string: true, american: false}))
    myInfoPage.fillDateOfBirth(chance.birthday({string: true, american: false}))
    myInfoPage.fillmaritalStatus("Married")
    //myInfoPage.fillMilitaryService("No")S
    myInfoPage.fillNationality("27")
    myInfoPage.fillListItem("1")
    myInfoPage.submitForm()
    myInfoPage.checkSuccessMessage()  

   
  })
 
})