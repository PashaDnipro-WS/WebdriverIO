import TemplatesPage from '../../pageobjects/pages/resources/templates.page.js'
import TemplateDetailsPage from '../../pageobjects/pages/resources/template-details.page.js'

describe('AI Templates', () => {
    beforeEach(async () => {
        await TemplatesPage.open()
        await TemplatesPage.expectPageIsDisplayed()
    })

    it('should open Payment Reminder AI Voice Agent from Healthcare templates', async () => {
        await TemplatesPage.selectHealthcareFilter()
        await TemplatesPage.openPaymentReminderTemplate()

        await TemplateDetailsPage.expectPageIsDisplayed()
    })

    it('should increase progress bar while scrolling template steps - Healthcare template', async () => {
        await TemplatesPage.selectHealthcareFilter()

        await TemplatesPage.openPaymentReminderTemplate()

        await TemplateDetailsPage.expectPageIsDisplayed()

        await TemplateDetailsPage.expectProgressBarGrowsWhileScrolling()
    })

     it('should increase progress bar while scrolling template steps - Insurance template', async () => {
        await TemplatesPage.selectInsuranceFilter()

        await TemplatesPage.openAutomateClaimIntakeInstantlyTemplate()

        await TemplateDetailsPage.expectPageIsDisplayed()

        await TemplateDetailsPage.expectProgressBarGrowsWhileScrolling()
    })
})