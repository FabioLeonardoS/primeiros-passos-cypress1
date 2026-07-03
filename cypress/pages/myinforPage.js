class MyinforPage {
    selectorsList() {
        const selectors = {
            // Define selectors for the My Info page
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            middleNameField: '[name="middleName"]',
            genericField: '.oxd-input--active',
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateBirthField: '[placeholder="yyyy-dd-mm"]',
            listItem: '[tabindex="0"]',
            listMaritalStatus: '.oxd-select-wrapper',
            CloseButton: ".--close",
            ClosepopupButton: ".oxd-toast-close",
            submitButton: '[type="submit"]',
            maritalStatus: '.oxd-select-dropdown > :nth-child(3)',
            listNationality: '.oxd-select-wrapper',
            nationality: '.oxd-select-dropdown > :nth-child(27)',
            checkSuccessMessage: '.oxd-toast-content',  
        }
        return selectors;
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
              
    }
    fillOtherDetails(nickName, employeeId, driverLicense, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
    }
    fillDateOfField(dateField) {
        cy.get(this.selectorsList().dateField).eq(0).clear().type(dateField)
        cy.get(this.selectorsList().CloseButton).click()
    }
    fillDateOfBirth(dateOfBirth) {
        cy.get(this.selectorsList().dateBirthField).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().CloseButton).click()
    
    }
    fillmaritalStatus(maritalStatus) {
        cy.get(this.selectorsList().listMaritalStatus).eq(1).click()
        cy.get(this.selectorsList().maritalStatus).click()
    }
    fillMilitaryService(militaryService) {
        cy.get(this.selectorsList().genericField).eq(11).clear().type(militaryService)
    }
    fillNationality(nationality) {
        cy.get(this.selectorsList().listNationality).eq(0).click()
        cy.get(this.selectorsList().nationality).click()
    }
    fillListItem(listItem) {
        cy.get(this.selectorsList().listItem).eq(0).click()
    }
    submitForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }
    checkSuccessMessage() {
        cy.get(this.selectorsList().checkSuccessMessage).should('contain', 'Successfully Updated')
        cy.get(this.selectorsList().ClosepopupButton).click()
    }   



    

}
export default MyinforPage