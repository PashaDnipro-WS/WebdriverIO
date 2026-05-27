class IotEsimPricingPage {
    get payAsYouGoPlanLink() {
        return $('//a[contains(@href, "#pay-as-you-go")]')
    }

    get payAsYouGoHeading() {
        return $('//h2[normalize-space()="Pay as you go"]')
    }

    get pricingData() {
        return $$('.grid-item-full-width')
    }

    get simCardsTitle() {
        return $('//h3[contains(., "How many SIM cards do you need?")]')
    }

    get simCardsInput() {
        return $('#iot-sim-savings-calculator__number-of-sim-cards')
    }

    get dataUsageTitle() {
        return $('//h3[contains(., "How much data")]')
    }

    get dataUsageInput() {
        return $('#iot-sim-savings-calculator__number-of-mb-per-month')
    }

    get countryTitle() {
        return $('//h3[contains(., "Where will you use your SIM cards?")]')
    }

    get countryDropdown() {
        return $('//h3[contains(., "Where will you use your SIM cards?")]//following::button[@role="combobox"][1]')
    }

    get publicIpTitle() {
        return $('//h3[contains(., "Will you use a public IP?")]')
    }

    get radioButtonYes() {
        return $('#iot-sim-savings-calculator__public-ip__-yes')
    }

    get radioButtonNo() {
        return $('#iot-sim-savings-calculator__public-ip__-no')
    }

    get costMessage() {
        return $('//strong[normalize-space()="Monthly estimated costs"]')
    }

    get nextButton() {
        return $('//button[contains(., "Next")]')
    }

    get backButton() {
        return $('//button[contains(., "Back")]')
    }

    countryOption(country) {
        return $(`//span[normalize-space()="${country}"]`)
    }

    async openPayAsYouGoPlan() {
        await this.payAsYouGoPlanLink.scrollIntoView()
        await this.payAsYouGoPlanLink.click()
    }

    async expectPayAsYouGoPlanIsDisplayed() {
        await expect(this.payAsYouGoHeading).toBeDisplayed()

        const pricingItems = await this.pricingData

        for (const item of pricingItems) {
            await expect(item).toBeDisplayed()
        }
    }

    async expectCalculatorStepOneIsDisplayed() {
        await expect(this.simCardsTitle).toBeDisplayed()
        await expect(this.simCardsInput).toBeDisplayed()
    }

    async fillSimCardsAmount(amount) {
        await this.simCardsInput.setValue(amount)
    }

    async expectDataUsageStepIsDisplayed() {
        await expect(this.dataUsageTitle).toBeDisplayed()
        await expect(this.dataUsageInput).toBeDisplayed()
    }

    async fillDataUsageAmount(amount) {
        await this.dataUsageInput.setValue(amount)
    }

    async expectCountryStepIsDisplayed() {
        await expect(this.countryTitle).toBeDisplayed()
        await expect(this.countryDropdown).toBeDisplayed()
    }

    async selectCountry(country) {
        await this.countryDropdown.click()

        const option = await this.countryOption(country)

        await option.waitForDisplayed()
        await option.click()
    }

    async expectPublicIpStepIsDisplayed() {
        await expect(this.publicIpTitle).toBeDisplayed()
        await expect(this.radioButtonYes).toBeDisplayed()
        await expect(this.radioButtonNo).toBeDisplayed()
    }

    async selectPublicIpOption(publicIp) {
        if (publicIp === 'Yes') {
            await this.radioButtonYes.click()
            return
        }

        await this.radioButtonNo.click()
    }

    async goToNextStep() {
        await this.nextButton.waitForClickable()
        await this.nextButton.click()
    }

    async fillCalculatorForm({
        simCardsAmount,
        dataUsageAmount,
        country,
        publicIp,
    }) {
        await this.expectCalculatorStepOneIsDisplayed()
        await this.fillSimCardsAmount(simCardsAmount)
        await this.goToNextStep()

        await this.expectDataUsageStepIsDisplayed()
        await this.fillDataUsageAmount(dataUsageAmount)
        await this.goToNextStep()

        await this.expectCountryStepIsDisplayed()
        await this.selectCountry(country)
        await this.goToNextStep()

        await this.expectPublicIpStepIsDisplayed()
        await this.selectPublicIpOption(publicIp)
        await this.goToNextStep()
    }

    async expectCalculationResultIsDisplayed() {
        await expect(this.costMessage).toBeDisplayed()
    }
}

export default new IotEsimPricingPage()