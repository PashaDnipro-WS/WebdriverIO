import { envConfig } from '../../../config/env.config.js'

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
        return browser.url(`${envConfig.portalUrl}/#/login/sign-in`)
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

    get themeToggleInput() {
        return $('input[type="checkbox"]')
    }

    get themeToggleButton() {
        return $('span.MuiSwitch-root')
    }

    async toggleTheme() {
        await this.themeToggleButton.waitForClickable()
        await this.themeToggleButton.click()
    }

    async expectThemeIsEnabled() {
        await expect(this.themeToggleInput).toBeChecked()
    }

    async expectThemeIsDisabled() {
        await expect(this.themeToggleInput).not.toBeChecked()
    }

    // Popup Iframe

    async closeGooglePopupIfDisplayed() {
        await browser.execute(() => {
            const popup = document.querySelector('#credential_picker_container')

            if (popup) {
                popup.remove()
            }
        })
    }
}

export default new LoginPage()