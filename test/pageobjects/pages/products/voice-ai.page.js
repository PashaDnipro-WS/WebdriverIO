import Page from '../page.js'

class VoiceAiPage extends Page{
    get pageTitle() {
        return $('//h1[contains(., "Voice AI Agents")]')
    }

    get chooseAgentHeading() {
        return $('//h2[normalize-space()="Choose from 1300+ voices"]')
    }

    get nextAgentButton() {
        return $('button[aria-label="Next models"]')
    }

    get joannaAgent() {
        return $('//span[normalize-space()="Joanna English (US)"]')
    }

    get textEditor() {
        return $('textarea[aria-label="Text to convert to speech"]')
    }

    get playAudioButton() {
        return $('//button[normalize-space()="PLAY AUDIO"]')
    }

    get stopAudioButton() {
        return $('span[data-content="Stop"]')
    }

    open() {
        return super.open('products/voice-ai-agents')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    async scrollToChooseAgentSection() {
        await this.chooseAgentHeading.scrollIntoView()
    }

    async selectJoannaAgent() {
        await this.scrollToChooseAgentSection()

        await browser.waitUntil(async () => {
            if (await this.joannaAgent.isDisplayed()) {
                await this.joannaAgent.click()
                return true
            }

            await this.nextAgentButton.click()
            await browser.pause(400)

            return false
        }, {
            timeout: 8000,
            timeoutMsg: 'Joanna English (US) agent was not found'
        })
    }

    async playAudio() {
        await this.playAudioButton.click()
    }

    async expectAudioIsPlaying() {
        await expect(this.stopAudioButton).toBeDisplayed()
    }

    async expectAudioFinished() {
        await expect(this.playAudioButton).toBeDisplayed({ timeout: 2000 })
    }

    async clearText() {
        await this.textEditor.click()

        await browser.keys(['Control', 'A'])
        await browser.keys('Backspace')
    }

    async enterCustomText(text) {
        await this.textEditor.setValue(text)
    }

    async setCustomText(text) {
        await this.clearText()
        await this.enterCustomText(text)
    }
}

export default new VoiceAiPage()