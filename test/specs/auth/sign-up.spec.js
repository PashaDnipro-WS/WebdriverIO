import SignUpPage from '../../pageobjects/pages/sign-up.page.js'
import authData from '../../../data/auth.data.json' with { type: 'json' }

describe('Sign Up', () => {
    beforeEach(async () => {
        await SignUpPage.open()
        await SignUpPage.expectPageIsDisplayed()
        await SignUpPage.cookies.acceptCookies()
    })

    it('should show validation error for non-business email', async () => {
        const user = authData.signup.business

        await SignUpPage.fillBusinessSignUpForm(
            user.companyEmail,
            user.firstName,
            user.lastName,
            user.password,
            user.promoCode
        )

        await SignUpPage.expectCompanyEmailErrorIsDisplayed(user.errorMsg_1)
    })

    // it('should show check your email page after freemium sign up', async () => {
    //     const user = authData.signup.freemium

    //     await SignUpPage.signUpWithFreemiumEmail(user.email)
    // })
})