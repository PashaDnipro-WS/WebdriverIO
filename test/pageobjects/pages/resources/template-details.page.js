class TemplateDetailsPage {
    get launchHeading() {
        return $('//h2[normalize-space()="What this AI voice agent does"]')
    }

    get progressBar() {
        return $('div[aria-valuemax="5"]')
    }

    get steps() {
        return $$('h3[id]')
    }

    async expectPageIsDisplayed() {
        await expect(this.launchHeading).toBeDisplayed()
    }

    async getProgressBarWidth() {
        const width = await this.progressBar.getCSSProperty('width')
        return parseFloat(width.value)
    }

    async expectProgressBarGrowsWhileScrolling() {
        const widths = []

        const steps = await this.steps

        for (const step of steps) {
            await step.scrollIntoView()

            await browser.pause(500)

            const width = await this.getProgressBarWidth()

            widths.push(width)
        }

        for (let i = 1; i < widths.length; i++) {
            await expect(widths[i]).toBeGreaterThanOrEqual(widths[i - 1])
        }
    }
}

export default new TemplateDetailsPage()