class IotEsimPage {
    get pageTitle() {
        return $('//h1[normalize-space()="IoT eSIM"]')
    }

    get seePricingLink() {
        return $('//a[contains(., "See pricing") or contains(., "SEE PRICING")]')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async openPricingPage() {
        await this.seePricingLink.scrollIntoView()
        await this.seePricingLink.click()
    }
}

export default new IotEsimPage()