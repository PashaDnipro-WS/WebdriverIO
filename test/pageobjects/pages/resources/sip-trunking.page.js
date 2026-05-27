class SipTrunkingPage {
    get pageTitle() {
        return $('//h1[normalize-space()="SIP Trunking"]')
    }

    get fromDateInput() {
        return $('#start')
    }

    get toDateInput() {
        return $('#end')
    }

    async expectPageIsDisplayed() {
        await expect(this.pageTitle).toBeDisplayed()
        await expect(this.fromDateInput).toBeDisplayed()
        await expect(this.toDateInput).toBeDisplayed()
    }

    async setDateRange(fromDate, toDate) {
        await browser.execute((from, to) => {
            const fromInput = document.querySelector('#start')
            const toInput = document.querySelector('#end')

            fromInput.value = from
            fromInput.dispatchEvent(new Event('input', { bubbles: true }))
            fromInput.dispatchEvent(new Event('change', { bubbles: true }))

            toInput.value = to
            toInput.dispatchEvent(new Event('input', { bubbles: true }))
            toInput.dispatchEvent(new Event('change', { bubbles: true }))
        }, fromDate, toDate)
    }

    async expectDateRangeIsApplied(fromDate, toDate) {
        await expect(this.fromDateInput).toHaveValue(fromDate)
        await expect(this.toDateInput).toHaveValue(toDate)
    }
}

export default new SipTrunkingPage()