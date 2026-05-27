class DevelopersDropdown {
    get devDocsCard() {
        return $('//a[contains(@href, "developers.telnyx.com") and contains(@class, "items-end")]')
    }

    get integrationsCard() {
        return $('//a[contains(@href, "/integrations") and contains(@class, "items-end")]')
    }

    get developerCards() {
        return [
            this.devDocsCard,
            this.integrationsCard
        ]
    }

    async expectContentIsDisplayed() {
        await expect(this.devDocsCard).toBeDisplayed()
        await expect(this.integrationsCard).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.moveTo()

        const learnMoreLink = await card.$('p=Learn more')

        await expect(card).toBeDisplayed()
        await expect(learnMoreLink).toBeDisplayed()
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.developerCards) {
            await this.expectCardHoverWorks(card)
        }
    }
}

export default new DevelopersDropdown()