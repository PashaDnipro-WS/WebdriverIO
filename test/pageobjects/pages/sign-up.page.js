import { $, expect } from '@wdio/globals'
import Page from './page.js'
import CookiesComponent from '../components/cookies.component.js'

class SignUpPage extends Page {

    cookies = CookiesComponent

    get headingTitle() {
        return $('//h1[text()="Create your account"]')
    }

    get businessTab() {
        return $('//button[text()="Business"]')
    }

    get freemiumTab() {
        return $('//button[text()="Freemium"]')
    }

    get companyEmailInput() {
        return $('#sign-up-email')
    }

    get firstNameInput() {
        return $('#sign-up-first-name')
    }

    get lastNameInput() {
        return $('#sign-up-last-name')
    }

    get passwordInput() {
        return $('#sign-up-password')
    }

    get promoCodeButton() {
        return $('//button[text()="Apply a promo code"]')
    }

    get promoCodeInput() {
        return $('#sign-up-promo-code')
    }

    get termsCheckbox() {
        return $('#sign-up-terms')
    }

    get marketingCheckbox() {
        return $('#sign-up-marketing')
    }

    get submitButton() {
        return $('span[data-content="Signup"]')
    }

    get companyEmailError() {
        return $('//*[contains(text(), "business email") or contains(text(), "Please try again")]')
    }

    get verificationError() {
        return $('//*[contains(text(), "Verification failed") or contains(text(), "Security verification failed")]')
    }

    open() {
        return super.open('sign-up')
    }

    async expectPageIsDisplayed() {
        await expect(this.headingTitle).toBeDisplayed()
        await expect(this.businessTab).toBeDisplayed()
        await expect(this.freemiumTab).toBeDisplayed()
        await expect(this.companyEmailInput).toBeDisplayed()
        await expect(this.firstNameInput).toBeDisplayed()
        await expect(this.lastNameInput).toBeDisplayed()
        await expect(this.passwordInput).toBeDisplayed()
        await expect(this.promoCodeButton).toBeDisplayed()
        await expect(this.termsCheckbox).toBeDisplayed()
        await expect(this.marketingCheckbox).toBeDisplayed()
        await expect(this.submitButton).toBeDisplayed()
    }

    async clickBusinessTab() {
        await this.businessTab.click()
    }

    async clickFreemiumTab() {
        await this.freemiumTab.click()
    }

    async clickPromoCodeButton() {
        await this.promoCodeButton.click()
    }

    async acceptTerms() {
        await this.termsCheckbox.click()
    }

    async acceptMarketing() {
        await this.marketingCheckbox.click()
    }

    async submit() {
        await this.submitButton.click()
    }

    // get freemiumEmailInput() {
    //     return $('#freemium-email')
    // }

    // get continueButton() {
    //     return $('button[type = "submit"]')
    // }

    // get checkYourEmailTitle() {
    //     return $('//h1[normalize-space()="Check your email"]')
    // }

    // get verifyHumanCheckbox() {
    //     return $('//div//input[contains(@type, "checkbox")]')
    // }

    async fillBusinessSignUpForm(companyEmail, firstName, lastName, password, promoCode) {
        await this.companyEmailInput.setValue(companyEmail)
        await this.firstNameInput.setValue(firstName)
        await this.lastNameInput.setValue(lastName)
        await this.passwordInput.setValue(password)
        await this.clickPromoCodeButton()
        await this.promoCodeInput.setValue(promoCode)
        await this.acceptTerms()
        await this.acceptMarketing()
        await this.submit()
    }

    async expectCompanyEmailErrorIsDisplayed(errorMsg_1) {
        await expect(this.companyEmailError).toBeDisplayed()
        await expect(this.companyEmailError).toHaveText(errorMsg_1)
    }

    // async fillFreemiumEmail(email) {
    //     await this.freemiumEmailInput.setValue(email)
    // }

    // async submitFreemium() {
    //     await this.continueButton.click()
    // }

    // async signUpWithFreemiumEmail(email) {
    //     await this.clickFreemiumTab()
    //     await this.fillFreemiumEmail(email)
    // }

    // async expectCheckYourEmailPageIsDisplayed() {
    //     await expect(this.checkYourEmailTitle).toBeDisplayed()
    // }

    // async clickVerifyHumanCheckbox() {
    //     await this.verifyHumanCheckbox.waitForDisplayed()
    //     await this.verifyHumanCheckbox.click()
    // }

    // async expectVerificationErrorIsDisplayed() {
    //     await expect(this.verificationError).toBeDisplayed()
    // }
}

export default new SignUpPage()