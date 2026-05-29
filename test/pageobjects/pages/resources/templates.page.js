import Page from '../page.js'
import CookiesComponent from '../../components/cookies.component.js'

class TemplatesPage extends Page {

    cookies = CookiesComponent

    get pageTitle() {
        return $('//h1[normalize-space()="Browse all Voice AI Assistant templates"]')
    }

    get healthcareFilter() {
        return $('//div[@role="button" and normalize-space()="healthcare"]')
    }

    get paymentReminderTemplate() {
        return $('//a[contains(@href, "/templates/payment-reminder-voice-ai")]')
    }

    get insuranceFilter() {
        return $('//button[normalize-space()="insurance"]')
    }

    get automateClaimIntakeInstantlyTemplate() {
        return $('//a[contains(@href, "/templates/claim-reporting-voice-ai")]//p[contains(text(), "Claim Reporting Voice AI Agent")]')
    }

    open() {
        return super.open('templates')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async selectHealthcareFilter() {
        await this.healthcareFilter.scrollIntoView()
        await this.safeClick(this.healthcareFilter)
    }

    async openPaymentReminderTemplate() {
        await this.paymentReminderTemplate.scrollIntoView()
        await this.safeClick(this.paymentReminderTemplate)
    }

    async selectInsuranceFilter() {
        await this.insuranceFilter.scrollIntoView()
        await this.safeClick(this.insuranceFilter)
    }

    async openAutomateClaimIntakeInstantlyTemplate() {
        await this.automateClaimIntakeInstantlyTemplate.scrollIntoView()
        await this.safeClick(this.automateClaimIntakeInstantlyTemplate)
    }
}

export default new TemplatesPage()