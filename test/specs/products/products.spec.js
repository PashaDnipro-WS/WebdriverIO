import ProductsPage from '../../pageobjects/pages/products/products.page.js'
import IotEsimPage from '../../pageobjects/pages/products/iot-esim.page.js'
import IotEsimPricingPage from '../../pageobjects/pages/products/iot-esim-pricing.page.js'

describe('IoT eSIM product page', () => {
    beforeEach(async () => {
        await ProductsPage.open()
        await ProductsPage.expectPageIsDisplayed()
    })

    it('should open Pay as you go pricing plans', async () => {
        await ProductsPage.openIotSimCardPage()
        await IotEsimPage.openPricingPage()
        await IotEsimPricingPage.openPayAsYouGoPlan()

        await IotEsimPricingPage.expectPayAsYouGoPlanIsDisplayed()
    })

    it('should proceed through SIM cards pricing calculator', async () => {
        await ProductsPage.openIotSimCardPage()
        await IotEsimPage.openPricingPage()
        await IotEsimPricingPage.openPayAsYouGoPlan()

        await IotEsimPricingPage.fillCalculatorForm({
            simCardsAmount: '2',
            dataUsageAmount: '256',
            country: 'Spain',
            publicIp: 'No',
        })

        await IotEsimPricingPage.expectCalculationResultIsDisplayed()
    })
})