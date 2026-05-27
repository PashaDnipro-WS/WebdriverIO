import SetiPage from '../../pageobjects/pages/resources/seti.page.js'
import SipTrunkingPage from '../../pageobjects/pages/resources/sip-trunking.page.js'

describe('SETI SIP Trunking', () => {

    beforeEach(async () => {
        await SetiPage.open()

        await SetiPage.expectPageIsDisplayed()

        await SetiPage.openSipTrunkingContent()

        await SipTrunkingPage.expectPageIsDisplayed()
    })

    it('should update date range', async () => {

        await SipTrunkingPage.setDateRange(
            '2026-05-27T18:25',
            '2026-05-27T20:25'
        )

        await SipTrunkingPage.expectDateRangeIsApplied(
            '2026-05-27T18:25',
            '2026-05-27T20:25'
        )
    })
})