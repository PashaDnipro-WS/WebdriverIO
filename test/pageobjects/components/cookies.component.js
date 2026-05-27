class CookiesComponent {
    get acceptButton() {
        return $('#onetrust-accept-btn-handler')
    }

    async acceptCookies() {
        if (await this.acceptButton.isDisplayed()) {
            await this.acceptButton.click()
        }
    }
}

export default new CookiesComponent()