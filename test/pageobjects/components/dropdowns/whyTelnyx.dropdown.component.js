class WhyTelnyxDropdown {
    get ourNetworkCard() {
        return $('//a[contains(@href, "/our-network") and contains(@class, "items-end")]')
    }

    get missionControlPortalCard() {
        return $('//a[contains(@href, "/mission-control") and contains(@class, "items-end")]')
    }

    get customerStoriesCard() {
        return $('//a[contains(@href, "/customer-stories") and contains(@class, "items-end")]')
    }

    get globalCoverageCard() {
        return $('//a[contains(@href, "/global-coverage") and contains(@class, "items-end")]')
    }

    get whyTelnyxCards() {
        return [
            this.ourNetworkCard,
            this.missionControlPortalCard,
            this.customerStoriesCard,
            this.globalCoverageCard
        ]
    }

    async expectContentIsDisplayed() {
        await expect(this.ourNetworkCard).toBeDisplayed()
        await expect(this.missionControlPortalCard).toBeDisplayed()
        await expect(this.customerStoriesCard).toBeDisplayed()
        await expect(this.globalCoverageCard).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.moveTo()

        const learnMoreLink = await card.$('p=Learn more')

        await expect(card).toBeDisplayed()
        await expect(learnMoreLink).toBeDisplayed()
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.whyTelnyxCards) {
            await this.expectCardHoverWorks(card)
        }
    }
}

export default new WhyTelnyxDropdown()