import Page from "../page"

class IntegrationsPage  extends Page{

    get integrationsHeading() {
        return $('//h1[normalize-space()="Integrate with Voice AI Agents"]')
    }

    get designAndUxCategory() {
        return $('//span[contains(@id, "10")]')
    }

    get figmaCard() {
        return $('//h3[normalize-space()="Figma"]')
    }

    get lernMore_Figma() {
        return $('//a[contains(@href, "/integrations/figma")]')
    }

    open() {
        return super.open('integrations')
    }

    async expectPageIsDisplayed() {
        await expect(this.integrationsHeading).toBeDisplayed()
    }

    async selectDesignAndUxCategory() {
        await this.designAndUxCategory.scrollIntoView()
        await this.designAndUxCategory.click()
        await expect(this.figmaCard).toBeDisplayed()
    }

    async clickFigmaCard() {
        await this.lernMore_Figma.waitForDisplayed()
        await this.lernMore_Figma.click()
    }
}

export default new IntegrationsPage()