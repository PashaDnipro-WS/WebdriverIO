class ChatGptPage {
    get promptedQuestion() {
        return $('div[data-message-author-role="user"]')
    }

    async switchToChatGptTab() {
        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles()

            for (const handle of handles) {
                await browser.switchToWindow(handle)

                const url = await browser.getUrl()

                if (url.includes('chatgpt.com') || url.includes('chat.openai.com')) {
                    return true
                }
            }

            return false
        }, {
            timeout: 15000,
            timeoutMsg: 'ChatGPT tab was not opened'
        })
    }

    async expectPageIsOpened() {
        await browser.waitUntil(async () => {
            const url = await browser.getUrl()

            return url.includes('chatgpt.com') || url.includes('chat.openai.com')
        }, {
            timeout: 10000,
            timeoutMsg: 'ChatGPT page was not opened'
        })
    }

    async expectPromptedQuestionIsDisplayed() {
        await expect(this.promptedQuestion).toBeDisplayed()
    }
}

export default new ChatGptPage()