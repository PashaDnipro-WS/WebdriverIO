class FooterSection {
    get footer() {
        return $('#site-footer')
    }

    get askAiHeading() {
        return $('//h3[normalize-space()="Ask AI"]')
    }

    get chatGptLink() {
        return $('//h3[normalize-space()="Ask AI"]/following::a[contains(@href, "chat.openai.com")]')
    }

    async scrollToFooter() {
        await this.footer.scrollIntoView()
    }

    async openChatGptAskAiLink() {
        await this.scrollToFooter()
        await expect(this.askAiHeading).toBeDisplayed()

        await this.chatGptLink.waitForClickable()
        await this.chatGptLink.click()
    }
}

export default new FooterSection()