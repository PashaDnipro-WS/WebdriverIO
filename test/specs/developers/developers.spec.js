import DevDocsPage from '../../pageobjects/pages/developers/dev-docs.page.js'
import IntegrationsPage from '../../pageobjects/pages/developers/integrations.page.js'
import IntegrationDetailsPage from '../../pageobjects/pages/developers/integration-details.page.js'

describe('Developers flows', () => {
    it('should open LiveKit page from AI dropdown', async () => {
        await DevDocsPage.open()
        await DevDocsPage.expectPageIsDisplayed()

        await DevDocsPage.openLivekitPageFromAiDropdown()

        await DevDocsPage.expectLivekitPageIsDisplayed()
    })

    it('should open Figma integration page', async () => {
        await IntegrationsPage.open()

        await IntegrationsPage.expectPageIsDisplayed()

        await IntegrationsPage.selectDesignAndUxCategory()

        await IntegrationsPage.clickFigmaCard()

        await IntegrationDetailsPage.expectFigmaPageIsDisplayed()
    })
})