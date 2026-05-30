import NumbersPricingPage from '../../pageobjects/pages/pricing/numbers-pricing.page.js'

describe('Pricing - Global Numbers', () => {
    beforeEach(async () => {
        await NumbersPricingPage.open()
        await NumbersPricingPage.expectPageIsDisplayed()
        await NumbersPricingPage.CookiesComponent.acceptCookies()
    })

    it('should display selected country and number pricing info', async () => {
        await NumbersPricingPage.selectCountryAndCurrency('Spain', 'EUR')

        await NumbersPricingPage.expectSelectedCountryIsDisplayed('Spain')
        await NumbersPricingPage.expectNumberPricingInfoIsDisplayed()
    })
})