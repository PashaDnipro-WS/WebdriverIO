import { envConfig } from '../../../config/env.config.js'

export default class Page {
    open(path) {
        return browser.url(`${envConfig.baseUrl}/${path}`)
    }

    async safeClick(element) {
        await element.scrollIntoView({
            block: 'center'
        })

        await element.waitForDisplayed()
        await element.waitForEnabled()

        try {
            await element.click()
        } catch {
            await browser.execute(el => el.click(), element)
        }
    }
}
