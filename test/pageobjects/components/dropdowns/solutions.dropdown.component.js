class SolutionsDropdown {
    get healthcareCard() {
        return $('//a[contains(@href, "/solutions/healthcare") and contains(@class, "items-end")]')
    }

    get financeCard() {
        return $('//a[contains(@href, "/solutions/finance") and contains(@class, "items-end")]')
    }

    get travelAndHospitalityCard() {
        return $('//a[contains(@href, "/solutions/travel-and-hospitality") and contains(@class, "items-end")]')
    }

    get logisticsAndTransportationCard() {
        return $('//a[contains(@href, "/solutions/logistics-and-transportation") and contains(@class, "items-end")]')
    }

    get viewAllSolutionsButton() {
        return $('//a[.//span[@data-content="View all solutions"]]')
    }

    get solutionCards() {
        return [
            this.healthcareCard,
            this.financeCard,
            this.travelAndHospitalityCard,
            this.logisticsAndTransportationCard
        ]
    }

    async expectContentIsDisplayed() {
        await expect(this.healthcareCard).toBeDisplayed()
        await expect(this.financeCard).toBeDisplayed()
        await expect(this.travelAndHospitalityCard).toBeDisplayed()
        await expect(this.logisticsAndTransportationCard).toBeDisplayed()
        await expect(this.viewAllSolutionsButton).toBeDisplayed()
    }

    async expectCardHoverWorks(card) {
        await card.moveTo()

        const learnMoreLink = await card.$('p=Learn more')

        await expect(card).toBeDisplayed()
        await expect(learnMoreLink).toBeDisplayed()
    }

    async expectAllCardsHoverWorks() {
        for (const card of this.solutionCards) {
            await this.expectCardHoverWorks(card)
        }
    }

    async clickViewAllSolutions() {
        await this.viewAllSolutionsButton.click()
    }
}

export default new SolutionsDropdown()