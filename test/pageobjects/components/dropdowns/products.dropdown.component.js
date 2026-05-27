class ProductsDropdown {
    get voiceAiCard() {
        return $('//a[contains(@href, "/products/voice-ai") and contains(@class, "items-end")]')
    }

    get voiceApiCard() {
        return $('//a[contains(@href, "/products/voice-api") and contains(@class, "items-end")]')
    }

    get inferenceCard() {
        return $('//a[contains(@href, "/products/inference") and contains(@class, "items-end")]')
    }

    get mobileVoiceCard() {
        return $('//a[contains(@href, "/products/mobile-voice") and contains(@class, "items-end")]')
    }

    get viewAllProductsButton() {
        return $('//a[.//span[@data-content="View all products"]]')
    }

    get productCards() {
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
        await expect(this.viewAllProductsButton).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.moveTo()

        const learnMoreLink = await card.$('p=Learn more')

        await expect(card).toBeDisplayed()
        await expect(learnMoreLink).toBeDisplayed()
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.productCards) {
            await this.expectCardHoverWorks(card)
        }
    }

    async clickViewAllProducts() {
        await this.viewAllProductsButton.click()
    }
}

export default new ProductsDropdown()