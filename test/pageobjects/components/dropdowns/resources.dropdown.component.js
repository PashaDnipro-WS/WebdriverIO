class ResourcesDropdown {
    get eventsCard() {
        return $('//a[contains(@href, "/events") and contains(@class, "items-end")]')
    }

    get resourceCenterCard() {
        return $('//a[contains(@href, "/resources") and contains(@class, "items-end")]')
    }

    get supportCenterCard() {
        return $('//a[contains(@href, "support.telnyx.com/en/") and contains (@target, "_blank")]')
    }

    get aiTemplatesCard() {
        return $('//a[contains(@href, "/templates") and contains(@class, "items-end")]')
    }

    get setiLink() {
        return $('//a[contains(@href, "seti.telnyx.com/") and contains (@target, "_blank")]')
    }

    get resourceCards() {
        return [
            this.eventsCard,
            this.resourceCenterCard,
            this.supportCenterCard,
            this.aiTemplatesCard
        ]
    }

    async expectContentIsDisplayed() {
        await expect(this.eventsCard).toBeDisplayed()
        await expect(this.resourceCenterCard).toBeDisplayed()
        await expect(this.supportCenterCard).toBeDisplayed()
        await expect(this.aiTemplatesCard).toBeDisplayed()
        await expect(this.setiLink).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.waitForDisplayed({ timeout: 5000 })

        await card.scrollIntoView({
            block: 'center',
            inline: 'center'
        })

        const learnMoreLink = await card.$('p=Learn more')

        await card.moveTo()

        await learnMoreLink.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Learn more link was not displayed after card hover'
        })
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.resourceCards) {
            await this.expectCardHoverWorks(card)
        }
    }

    async clickSeti() {
        await this.setiLink.click()
    }
}

export default new ResourcesDropdown()