class FullStackSection {
    get sectionTitle() {
        return $('//h3[normalize-space()="THE FULL STACK"]')
    }

    get agentExecutionAndMemoryTab() {
        return $('//*[contains(normalize-space(), "Agent Execution & Memory")]')
    }

    get realTimeComputeItem() {
        return $('//*[normalize-space()="Real-time compute"]')
    }

    get aiNativeOrchestrationItem() {
        return $('//*[normalize-space()="AI-native orchestration"]')
    }

    get storageAndVerticalSystemsItem() {
        return $('//*[normalize-space()="Storage and vertical systems"]')
    }

    get observabilitySecurityEconomicsItem() {
        return $('//*[normalize-space()="Observability, security, & economics"]')
    }

    get configureAgentButton() {
        return $('span[data-content="CONFIGURE AGENT"]')
    }

    async scrollToSection() {
        await this.sectionTitle.scrollIntoView()
    }

    async openAgentExecutionAndMemory() {
        await this.scrollToSection()
        await this.agentExecutionAndMemoryTab.click()
    }

    async expectAgentExecutionAndMemoryInfoIsDisplayed() {
        await expect(this.agentExecutionAndMemoryTab).toBeDisplayed()
        await expect(this.realTimeComputeItem).toBeDisplayed()
        await expect(this.aiNativeOrchestrationItem).toBeDisplayed()
        await expect(this.storageAndVerticalSystemsItem).toBeDisplayed()
        await expect(this.observabilitySecurityEconomicsItem).toBeDisplayed()
        await expect(this.configureAgentButton).toBeDisplayed()
        await expect(this.configureAgentButton).toBeClickable()
    }
}

export default new FullStackSection()