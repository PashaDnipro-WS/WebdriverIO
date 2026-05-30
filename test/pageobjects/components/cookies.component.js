class CookiesComponent {
    get acceptButton() {
        return $('#onetrust-accept-btn-handler')
    }

    get banner() {
        return $('#onetrust-banner-sdk')
    }

    async acceptCookies() {
        if (await this.banner.isExisting() && await this.banner.isDisplayed()) {
            await this.acceptButton.waitForClickable({ timeout: 5000 })
            await this.acceptButton.click()

            await browser.waitUntil(
                async () => !(await this.banner.isDisplayed()),
                {
                    timeout: 10000,
                    timeoutMsg: 'Cookie banner was not closed'
                }
            )
        }
    }
}

export default new CookiesComponent()