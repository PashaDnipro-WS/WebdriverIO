import LoginPage from '../../pageobjects/pages/login.page.js'
import authData from '../../../data/auth.data.json' with { type: 'json' }

describe('Login', () => {
    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should show security verification error after requesting sign-in link in automation browser', async () => {
        const user = authData.login

        await LoginPage.loginWithMagicLink(user.email)

        await LoginPage.expectVerificationErrorIsDisplayed()
    })

    it('should switch theme mode', async () => {
        await LoginPage.closeGooglePopupIfDisplayed()

        await LoginPage.expectThemeIsDisabled()

        await LoginPage.toggleTheme()

        await LoginPage.expectThemeIsEnabled()

        await LoginPage.toggleTheme()

        await LoginPage.expectThemeIsDisabled()
    })
})