import HomePage from '../pageobjects/pages/home.page.js'
import ChatGptPage from '../pageobjects/pages/integrations/chat-gpt.page.js'

describe('Home page', () => {
    beforeEach(async () => {
        await HomePage.open()
        await HomePage.expectPageIsDisplayed()
    })

    it('should display Agent Execution & Memory section info', async () => {
        await HomePage.FullStackSection.openAgentExecutionAndMemory()

        await HomePage.FullStackSection.expectAgentExecutionAndMemoryInfoIsDisplayed()
    })

    it('should display Build Your Agent block and activate all agent buttons', async () => {
        await HomePage.AgentRuntimeSection.openVoiceAgentBuilder()

        await HomePage.AgentRuntimeSection.expectBuildYourAgentBlockIsDisplayed()

        await HomePage.AgentRuntimeSection.expectAgentButtonsAreDisplayed()

        await HomePage.AgentRuntimeSection.expectEachAgentButtonCanBeActivated()
    })

    it('should open ChatGPT with predefined Telnyx question from Ask AI footer link', async () => {
        await HomePage.FooterSection.openChatGptAskAiLink()

        await ChatGptPage.switchToChatGptTab()
        await ChatGptPage.expectPageIsOpened()
        await ChatGptPage.expectPromptedQuestionIsDisplayed()
    })
})