import Page from '../page.js'

class TemplatesPage extends Page {
    get pageTitle() {
        return $('//h1[normalize-space()="Browse all Voice AI Assistant templates"]')
    }

    get healthcareFilter() {
        return $('//button[normalize-space()="healthcare"]')
    }

    get paymentReminderTemplate() {
        return $('//a[contains(@href, "/templates/payment-reminder-voice-ai")]//p[contains(text(), "Payment Reminder AI Voice Agent")]')
    }

    get insuranceFilter() {
        return $('//button[normalize-space()="insurance"]')
    }

    get automateClaimIntakeInstantlyTemplate() {
        return $('//a[contains(@href, "/templates/claim-reporting-voice-ai")]//p[contains(text(), "Automate claim intake instantly")]')
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