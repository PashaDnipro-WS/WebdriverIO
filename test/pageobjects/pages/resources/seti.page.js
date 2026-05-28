import { envConfig } from '../../../../config/env.config.js'


class SetiPage {
    get pageTitle() {
        return $('//h1[normalize-space()="Overview"]')
    }

    get sipTrunkingBlock() {
        return $('//a[contains(@href, "/sip-trunking")]')
    }

    open() {
        return browser.url(envConfig.setiUrl)
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async openSipTrunkingContent() {
        await this.sipTrunkingBlock.click()
    }
}

export default new SetiPage()