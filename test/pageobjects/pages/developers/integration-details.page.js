class IntegrationDetailsPage {
    get figmaHeading() {
        return $('//h1[normalize-space()="Figma"]')
    }

    async expectFigmaPageIsDisplayed() {
        await expect(this.figmaHeading).toBeDisplayed()
    }
}

export default new IntegrationDetailsPage()