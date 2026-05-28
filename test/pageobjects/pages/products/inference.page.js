import Page from '../page.js'

class InferencePage extends Page {
    get pageTitle() {
        return $('//h1[normalize-space()="Global inference. Local data."]')
    }

    get runtimeHeading() {
        return $('//h2[contains(., "Frontier models that earn their place")]')
    }

    get kimiModel() {
        return $('//span[normalize-space()="Kimi K2.5"]')
    }

    get chatInput() {
        return $('//input[contains(@placeholder, "Type message here")]')
    }

    get sendMessageButton() {
        return $('button[type="submit"]')
    }

    get assistantMessages() {
        return $$('//div[contains(@class, "whitespace-pre-wrap")]//p')
    }

    get languageDropdown() {
        return $('//div[contains(@class, "items-start")]//button[contains(@aria-label, "Select language")]')
    }

    get ukrainianLanguageOption() {
        return $('//*[normalize-space()="Ukrainian"]')
    }

    open() {
        return super.open('products/inference')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async scrollToRuntimeSection() {
        await this.runtimeHeading.scrollIntoView()
    }

    async selectKimiModel() {
        await this.scrollToRuntimeSection()
        await this.kimiModel.click()
    }

    async sendMessage(message) {
        await this.chatInput.setValue(message)
        await this.sendMessageButton.click()
    }

    async expectAssistantResponseIsDisplayed() {
        await browser.waitUntil(async () => {
            const messages = await this.assistantMessages

            for (const message of messages) {
                const text = await message.getText()

                if (text.length > 10 && !text.includes('SEND MESSAGE')) {
                    return true
                }
            }

            return false
        }, {
            timeout: 2000,
            timeoutMsg: 'Assistant response was not displayed'
        })
    }

    async selectUkrainianLanguage() {
        await this.languageDropdown.click()
        await this.ukrainianLanguageOption.click()
    }

    async expectAssistantResponseIsDisplayedByPattern(pattern, timeoutMsg) {
        await browser.waitUntil(async () => {
            const messages = await this.assistantMessages

            for (const message of messages) {
                const text = await message.getText()

                if (pattern.test(text)) {
                    return true
                }
            }

            return false
        }, {
            timeout: 20000,
            timeoutMsg
        })
    }

    async expectAssistantResponseIsDisplayed() {
        await this.expectAssistantResponseIsDisplayedByPattern(
            /^.{10,}$/,
            'Assistant response was not displayed'
        )
    }

    async expectUkrainianResponseIsDisplayed() {
        await this.expectAssistantResponseIsDisplayedByPattern(
            /[А-ЩЬЮЯЄІЇҐа-щьюяєіїґ]/,
            'Ukrainian response was not displayed'
        )
    }
}

export default new InferencePage()