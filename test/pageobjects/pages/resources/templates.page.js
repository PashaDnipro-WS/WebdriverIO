import Page from '../page.js'

class TemplatesPage extends Page {
    get pageTitle() {
        return $('//h1[normalize-space()="Browse all Voice AI Assistant templates"]')
    }

    get healthcareFilter() {
        return $('//button[normalize-space()="healthcare"]')
    }

    get paymentReminderTemplate() {
        return $('//p[normalize-space()="Payment Reminder AI Voice Agent"]')
    }

    get insuranceFilter() {
        return $('//button[normalize-space()="insurance"]')
    }

    get automateClaimIntakeInstantlyTemplate() {
        return $('//p[normalize-space()="Automate claim intake instantly"]')
    }

    open() {
        return super.open('templates')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async selectHealthcareFilter() {
        await this.healthcareFilter.scrollIntoView()
        await this.healthcareFilter.click()
    }

    async openPaymentReminderTemplate() {
        await this.paymentReminderTemplate.scrollIntoView()
        await this.paymentReminderTemplate.click()
    }

    async selectInsuranceFilter() {
        await this.insuranceFilter.scrollIntoView()
        await this.insuranceFilter.click()
    }

    async openAutomateClaimIntakeInstantlyTemplate() {
        await this.automateClaimIntakeInstantlyTemplate.scrollIntoView()
        await this.automateClaimIntakeInstantlyTemplate.click()
    }
}

export default new TemplatesPage()