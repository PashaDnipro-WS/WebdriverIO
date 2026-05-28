class AgentRuntimeSection {
    get sectionLabel() {
        return $('//*[normalize-space()="AGENT RUNTIME"]')
    }

    get sectionTitle() {
        return $('//h2[contains(., "Configure the environment your agents run in")]')
    }

    get voiceAgentBuilderTab() {
        return $('//*[normalize-space()="Voice Agent Builder"]')
    }

    get buildYourAgentTitle() {
        return $('//*[normalize-space()="BUILD YOUR AGENT"]')
    }

    get agentButtons() {
        return $$('//button[@type="button" and @aria-pressed]')
    }

    async scrollToSection() {
        await this.sectionLabel.scrollIntoView()
    }

    async openVoiceAgentBuilder() {
        await this.scrollToSection()
        await this.voiceAgentBuilderTab.click()
    }

    async expectBuildYourAgentBlockIsDisplayed() {
        await expect(this.buildYourAgentTitle).toBeDisplayed()
    }

    async expectAgentButtonsAreDisplayed(expectedAmount = 12) {
        const buttons = await this.agentButtons

        await expect(buttons).toBeElementsArrayOfSize(expectedAmount)

        for (const button of buttons) {
            await expect(button).toBeDisplayed()
            await expect(button).toBeClickable()
        }
    }

    async expectEachAgentButtonCanBeActivated() {
        const buttons = await this.agentButtons

        await expect(buttons).toBeElementsArrayOfSize(12)

        for (const button of buttons) {
            await button.click()
            await expect(button).toHaveAttribute('aria-pressed', 'true')
        }
    }
}

export default new AgentRuntimeSection()