class DevDocsPage {
    get aiMenuButton() {
        return $('//button[contains(., "AI")]')
    }

    get livekitOption() {
        return $('//div[contains(@class, "flex-col")]//span[contains(text(), "LiveKit on Telnyx")]')
    }

    get livekitHeading() {
        return $('//h1[contains(normalize-space(), "LiveKit on Telnyx")]')
    }

    get overviewHeading() {
        return $('//h1[normalize-space()="Introduction"]')
    }

    open() {
        return browser.url('https://developers.telnyx.com/docs/overview')
    }

    async expectPageIsDisplayed() {
        await expect(this.overviewHeading).toBeDisplayed()
        await expect(this.aiMenuButton).toBeDisplayed()
    }

    async openAiDropdown() {
        await this.aiMenuButton.moveTo()
        await this.livekitOption.waitForDisplayed({ timeout: 5000 })
    }

    async clickLivekitOption() {
        await this.livekitOption.click()
    }

    async openLivekitPageFromAiDropdown() {
        await this.openAiDropdown()
        await this.clickLivekitOption()
    }

    async expectLivekitPageIsDisplayed() {
        await expect(this.livekitHeading).toBeDisplayed()
    }
}

export default new DevDocsPage()