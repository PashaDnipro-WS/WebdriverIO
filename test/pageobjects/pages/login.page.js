class LoginPage {
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

    get themeToggle() {
        return $('input[type="checkbox"]')
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

   // toggle methods

    async toggleTheme() {
        await this.themeToggle.click()
    }

    async expectThemeIsEnabled() {
        await expect(this.themeToggle).toBeChecked()
    }

    async expectThemeIsDisabled() {
        await expect(this.themeToggle).not.toBeChecked()
    }
}

export default new LoginPage()