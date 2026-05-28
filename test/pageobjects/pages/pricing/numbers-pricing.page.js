import Page from '../page.js'

class NumbersPricingPage extends Page {
    get pageTitle() {
        return $('//p[normalize-space()="Numbers pricing"]')
    }

    get payAsYouGoPlan() {
        return $('//h2[contains(., "Pay as you go")]')
    }

    get countryDropdown() {
        return $('#country-filter')
    }

    get currencyDropdown() {
        return $('#currency-filter')
    }

    get numberPricingHeading() {
        return $('//div[normalize-space()="Number pricing"]')
    }

    get localNumbersRow() {
        return $('//*[normalize-space()="Local numbers"]')
    }

    get tollFreeNumbersRow() {
        return $('//*[normalize-space()="Toll-free numbers"]')
    }

    get mobileNumbersRow() {
        return $('//*[normalize-space()="Mobile numbers"]')
    }

    get nationalNumbersRow() {
        return $('//*[normalize-space()="National numbers"]')
    }

    get reputationMonitoringRow() {
        return $('//*[normalize-space()="Reputation monitoring"]')
    }

    get reputationCheckRow() {
        return $('//*[normalize-space()="Reputation check"]')
    }

    countryOption(country) {
        return $(`//*[normalize-space()="${country}"]`)
    }

    currencyOption(currency) {
        return $(`//*[normalize-space()="${currency}"]`)
    }

    countryHeading(country) {
        return $(`//h2[contains(normalize-space(), "Pay as you go for ${country}")]`)
    }

    open() {
        return super.open('pricing/numbers')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async scrollToPayAsYouGoPlan() {
        await this.payAsYouGoPlan.scrollIntoView()
    }

    async selectCountry(country) {
        await this.countryDropdown.waitForClickable()
        await this.countryDropdown.click()

        const option = await this.countryOption(country)

        await option.waitForDisplayed()
        await option.click()
    }

    async selectCurrency(currency) {
        await this.currencyDropdown.waitForClickable()
        await this.currencyDropdown.click()

        const option = await this.currencyOption(currency)

        await option.waitForDisplayed()
        await option.click()
    }

    async selectCountryAndCurrency(country, currency) {
        await this.scrollToPayAsYouGoPlan()

        await this.selectCountry(country)
        await this.selectCurrency(currency)
    }

    async expectSelectedCountryIsDisplayed(country) {
        await expect(this.countryHeading(country)).toBeDisplayed()
    }

    async expectNumberPricingInfoIsDisplayed() {
        await expect(this.numberPricingHeading).toBeDisplayed()
        await expect(this.localNumbersRow).toBeDisplayed()
        await expect(this.tollFreeNumbersRow).toBeDisplayed()
        await expect(this.mobileNumbersRow).toBeDisplayed()
        await expect(this.nationalNumbersRow).toBeDisplayed()
        await expect(this.reputationMonitoringRow).toBeDisplayed()
        await expect(this.reputationCheckRow).toBeDisplayed()
    }
}

export default new NumbersPricingPage()