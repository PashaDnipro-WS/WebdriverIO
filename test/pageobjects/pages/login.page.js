class LoginPage{
    get emailInput() {
        return $('input[name="email"]')
    }

    get sendSignInLinkButton() {
        return $('//button[text()="Send me sign-in link"]')
    }

    get successToast() {
        return $('*=Please check your inbox for a sign-in link.')
    }

    get verificationError() {
        return $('//*[contains(text(), "Security verification failed")]')
    }

    open() {
        return browser.url('https://portal.telnyx.com/#/login/sign-in')
    }

    async fillEmail(email) {
        await this.emailInput.setValue(email)
    }

    async submitMagicLinkLogin() {
        await this.sendSignInLinkButton.click()
    }

    async loginWithMagicLink(email) {
        await this.fillEmail(email)
        await this.submitMagicLinkLogin()
    }

    async expectSuccessToastIsDisplayed() {
        await expect(this.successToast).toBeDisplayed()
    }

    async expectVerificationErrorIsDisplayed() {
        await expect(this.verificationError).toBeDisplayed()
    }
}

export default new LoginPage()