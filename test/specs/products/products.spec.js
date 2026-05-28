import ProductsPage from '../../pageobjects/pages/products/products.page.js'
import IotEsimPage from '../../pageobjects/pages/products/iot-esim.page.js'
import IotEsimPricingPage from '../../pageobjects/pages/products/iot-esim-pricing.page.js'
import VoiceAiPage from '../../pageobjects/pages/products/voice-ai.page.js'
import InferencePage from '../../pageobjects/pages/products/inference.page.js'

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

describe('Voice AI agents', () => {
    beforeEach(async () => {
        await VoiceAiPage.open()
        await VoiceAiPage.expectPageIsDisplayed()
        await VoiceAiPage.selectJoannaAgent()
    })

    it('should play default text audio', async () => {
        await VoiceAiPage.playAudio()

        await VoiceAiPage.expectAudioIsPlaying()
    })

    it('should play custom text audio completely', async () => {
        await VoiceAiPage.setCustomText('Hello, agent.')

        await VoiceAiPage.playAudio()

        await VoiceAiPage.expectAudioIsPlaying()
        await VoiceAiPage.expectAudioFinished()
    })
})

describe('Inference product page', () => {
    beforeEach(async () => {
        await InferencePage.open()
        await InferencePage.expectPageIsDisplayed()
        await InferencePage.selectKimiModel()
    })

    it('should send message and display assistant response', async () => {
        await InferencePage.sendMessage("What's up?")

        await InferencePage.expectAssistantResponseIsDisplayed()
    })

    it('should send message and display Ukrainian assistant response', async () => {
        await InferencePage.selectUkrainianLanguage()

        await InferencePage.sendMessage("What's up?")

        await InferencePage.expectUkrainianResponseIsDisplayed()
    })
})