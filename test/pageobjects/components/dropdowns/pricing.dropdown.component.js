class PricingDropdown {
    get voiceAiCard() {
        return $('//a[contains(@href, "/pricing/conversational-ai") and contains(@class, "items-end")]')
    }

    get voiceApiCard() {
        return $('//a[contains(@href, "/pricing/voice-api") and contains(@class, "items-end")]')
    }

    get inferenceCard() {
        return $('//a[contains(@href, "/pricing/inference-api") and contains(@class, "items-end")]')
    }

    get mobileVoiceCard() {
        return $('//a[contains(@href, "/pricing/mobile-voice") and contains(@class, "items-end")]')
    }

    get globalNumbersLink() {
        return $('//a[contains(@href, "/pricing/numbers") and contains(@class, "inline-flex")]')
    }

    get viewAllPricingButton() {
        return $('//a[.//span[@data-content="View all pricing"]]')
    }

    get pricingCards() {
        return [
            this.voiceAiCard,
            this.voiceApiCard,
            this.inferenceCard,
            this.mobileVoiceCard
        ]
    }

    async expectContentIsDisplayed() {
        await expect(this.voiceAiCard).toBeDisplayed()
        await expect(this.voiceApiCard).toBeDisplayed()
        await expect(this.inferenceCard).toBeDisplayed()
        await expect(this.mobileVoiceCard).toBeDisplayed()
        await expect(this.globalNumbersLink).toBeDisplayed()
        await expect(this.viewAllPricingButton).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.moveTo()

        const learnMoreLink = await card.$('p=Learn more')

        await expect(card).toBeDisplayed()
        await expect(learnMoreLink).toBeDisplayed()
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.pricingCards) {
            await this.expectCardHoverWorks(card)
        }
    }

    async clickGlobalNumbers() {
        await this.globalNumbersLink.click()
    }

    async clickViewAllPricing() {
        await this.viewAllPricingButton.click()
    }
}

export default new PricingDropdown()